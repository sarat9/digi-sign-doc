/**
 * Using node-signpdf to sign and pdfkit to create pdf
 */

const signer = require('node-signpdf').default;
const fs = require('fs');
const { SUBFILTER_ETSI_CADES_DETACHED, pdfkitAddPlaceholder } = require('node-signpdf/dist/helpers');
const PDFDocument = require('pdfkit');


/**
 * Creates a Buffer containing a PDF.
 * Returns a Promise that is resolved with the resulting Buffer of the PDFDocument.
 * @returns {Promise<Buffer>}
 */
 const createPdf = (params = {
    placeholder: {},
    text: 'node-signpdf',
}) => new Promise((resolve) => {
    const pdf = new PDFDocument({
        autoFirstPage: true,
        size: 'A4',
        layout: 'portrait',
        bufferPages: true,
    });
    pdf.info.CreationDate = '';

    // Add some content to the page
    pdf.fillColor('#333')
        .fontSize(25)
        .moveDown()
        .text(params.text);

    // Collect the ouput PDF
    // and, when done, resolve with it stored in a Buffer
    const pdfChunks = [];
    pdf.on('data', (data) => {
        pdfChunks.push(data);
    });
    pdf.on('end', () => {
        resolve(Buffer.concat(pdfChunks));
    });

    // Externally (to PDFKit) add the signature placeholder.
    const refs = pdfkitAddPlaceholder({
        pdf,
        pdfBuffer: Buffer.from([pdf]),
        reason: 'I am the author',
        ...params.placeholder,
        subFilter: SUBFILTER_ETSI_CADES_DETACHED
    });
    // Externally end the streams of the created objects.
    // PDFKit doesn't know much about them, so it won't .end() them.
    Object.keys(refs).forEach((key) => refs[key].end());

    // Also end the PDFDocument stream.
    // See pdf.on('end'... on how it is then converted to Buffer.
    pdf.end();
});


const action = async () => {
  let pdfBuffer = await createPdf();
  let p12Buffer = fs.readFileSync(__dirname + '/certs/Certificate_pkcs12.p12')
  let pdf = signer.sign(pdfBuffer, p12Buffer, { passphrase : '3tbImpBXzW4o', asn1StrictParsing : true });
  fs.writeFileSync(__dirname + '/demo.pdf', pdf);
}

action();

/**
 * 
 * CURRENTLY THROWS FOLLOWING ERROR
 * 
 * Tried with : https://github.com/vbuch/node-signpdf
 * 
 * TypeError: Cannot read property 'fonts' of undefined
    node create-pdf-then-sign-with-node-sign.js
    (node:5512) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'fonts' of undefined
    at PDFDocument.endAcroForm

    SOLUTION:

 */