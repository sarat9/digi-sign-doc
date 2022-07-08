/**
 * Using node-signpdf
 */


// import signer from 'node-signpdf';
const NodeSignPDF = require('node-signpdf')
const fs = require('fs')

console.log('Root Directory __dirname',__dirname)

// Setting paths to get pdf document and p12/pfx certificate
const PATH_TO_PDF_FILE= __dirname+ "/input.pdf"
const PATH_TO_P12_CERTIFICATE = __dirname+"/certs/Certificate_pkcs12.p12"

console.log('NodeSignPDF',NodeSignPDF)

const SignPdf = new NodeSignPDF.SignPdf()
SignPdf.DEFAULT_BYTE_RANGE_PLACEHOLDER = '**********';

console.log('NodeSignPDF SignPdf',SignPdf.sign)
console.log('NodeSignPDF DEFAULT_BYTE_RANGE_PLACEHOLDER',SignPdf.DEFAULT_BYTE_RANGE_PLACEHOLDER)

// Digitally Sign the pdf document with the certificate
// If the p12 certificate is password protected pass the passphrase
const signedPdf = SignPdf.sign(
  fs.readFileSync(PATH_TO_PDF_FILE),
  fs.readFileSync(PATH_TO_P12_CERTIFICATE),
  { passphrase : '3tbImpBXzW4o' }
);

/**
 * 
 * CURRENTLY THROWS FOLLOWING ERROR
 * 
 * Tried with : https://github.com/vbuch/node-signpdf
 * 
 * throw new _SignPdfError.default('No ByteRangeStrings found within PDF buffer', _SignPdfError.default.TYPE_PARSE);
    SignPdfError: No ByteRangeStrings found within PDF buffer

    SOLUTION:
    Check if we have the ByteRangeStrings in pdf. Creation of pdf might vary.
    
    If variable DEFAULT_BYTE_RANGE_PLACEHOLDER is set null, it might get fixed by changing to '**********' and it work.
    DEFAULT_BYTE_RANGE_PLACEHOLDER is found with import variable of library

    Few more solutions in below links

    HOWEVER DOESN'T SOLVE YET FOR ALL PDF DOCUMENTS
    PLEASE CHECK OTHER SNIPPETS

    Refer:
    - https://github.com/vbuch/node-signpdf/issues/7
    - Take a look at the notes section in develop as it differs a bit from those in master.
    https://github.com/vbuch/node-signpdf/tree/develop#notes
    - https://github.com/vbuch/node-signpdf/blob/master/src/signpdf.js#L56
    - https://www.adobe.com/devnet-docs/etk_deprecated/tools/DigSig/Acrobat_DigitalSignatures_in_PDF.pdf


 */


console.log('Output as Signed PDF')
console.log(signedPdf)