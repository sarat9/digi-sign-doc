const fs = require('fs');
const signer = require('node-signpdf');
const {
  PDFDocument,
  PDFName,
  PDFNumber,
  PDFHexString,
  PDFString,
} = require('pdf-lib');

// Custom code to add Byterange to PDF
const PDFArrayCustom = require('./lib/PDFArrayCustom');

// The PDF we're going to sign
const pdfBuffer = fs.readFileSync('./input.pdf');

// The p12 certificate we're going to sign with
const p12Buffer = fs.readFileSync('./certs/Certificate_pkcs12.p12');

// This length can be derived from the following `node-signpdf` error message:
//   ./node_modules/node-signpdf/dist/signpdf.js:155:19
const SIGNATURE_LENGTH = 4540;

(async () => {
  const pdfDoc = await PDFDocument.load(pdfBuffer);
  const pages = pdfDoc.getPages();

  const ByteRange = PDFArrayCustom.withContext(pdfDoc.context);
  ByteRange.push(PDFNumber.of(0));
  ByteRange.push(PDFName.of(signer.DEFAULT_BYTE_RANGE_PLACEHOLDER));
  ByteRange.push(PDFName.of(signer.DEFAULT_BYTE_RANGE_PLACEHOLDER));
  ByteRange.push(PDFName.of(signer.DEFAULT_BYTE_RANGE_PLACEHOLDER));

  const signatureDict = pdfDoc.context.obj({
    Type: 'Sig',
    Filter: 'Adobe.PPKLite',
    SubFilter: 'adbe.pkcs7.detached',
    ByteRange,
    Contents: PDFHexString.of('A'.repeat(SIGNATURE_LENGTH)),
    Reason: PDFString.of('We need your signature for reasons...'),
    M: PDFString.fromDate(new Date()),
  });
  const signatureDictRef = pdfDoc.context.register(signatureDict);

  const widgetDict = pdfDoc.context.obj({
    Type: 'Annot',
    Subtype: 'Widget',
    FT: 'Sig',
    Rect: [0, 0, 0, 0],
    V: signatureDictRef,
    T: PDFString.of('Signature1'),
    F: 4,
    P: pages[0].ref,
  });
  const widgetDictRef = pdfDoc.context.register(widgetDict);

  // Add our signature widget to the first page
  pages[0].node.set(PDFName.of('Annots'), pdfDoc.context.obj([widgetDictRef]));

  // Create an AcroForm object containing our signature widget
  pdfDoc.catalog.set(
    PDFName.of('AcroForm'),
    pdfDoc.context.obj({
      SigFlags: 3,
      Fields: [widgetDictRef],
    }),
  );

  const modifiedPdfBytes = await pdfDoc.save({ useObjectStreams: false });
  const modifiedPdfBuffer = Buffer.from(modifiedPdfBytes);

  const signObj = new signer.SignPdf();
  const signedPdfBuffer = signObj.sign(modifiedPdfBuffer, p12Buffer, {
    passphrase: 'password',
  });

  // Write the signed file
  fs.writeFileSync('./signed.pdf', signedPdfBuffer);

  console.log("Pdf Document Digitally Signed")
})();


