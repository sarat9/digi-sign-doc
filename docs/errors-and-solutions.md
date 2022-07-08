# Errors and Solutions
Errors you might face while going through the process

##
##
##

## SignPdfError: No ByteRangeStrings found within PDF buffer

- Throws in file: node snippets/sign-with-node-signpdf.js
- Tried with https://github.com/vbuch/node-signpdf

### Error
```
throw new _SignPdfError.default('No ByteRangeStrings found within PDF buffer', _SignPdfError.default.TYPE_PARSE);

SignPdfError: No ByteRangeStrings found within PDF buffer
```
### SOLUTION:
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

##
##

## TypeError: Cannot read property 'fonts' of undefined

- Throws in file: node snippets/sign-with-node-signpdf.js
- Tried with https://github.com/vbuch/node-signpdf
- pdf-kit library used to generate a new pdf

### Error
```
TypeError: Cannot read property 'fonts' of undefined
    at PDFDocument.endAcroForm (/Users/saratchandrae/Sarat-myFiles/Projects/document-add-certificate/node/digisign/node_modules/pdfkit/js/pdfkit.js:5601:39)
```
### SOLUTION:

https://github.com/vbuch/node-signpdf/issues/88

##
##

## Error: PEM routines:get_name:no start line

- Throws in file: node app.js
- Tried with https://github.com/vbuch/node-signpdf
- pdf-kit library used to generate a new pdf

### Error
```
Error: error:0909006C:PEM routines:get_name:no start line
    at Sign.sign (internal/crypto/sig.js:110:29)
```
### SOLUTION:

Make sure you have use private key header

https://stackoverflow.com/questions/70333915/error0909006cpem-routinesget-nameno-start-line-for-google-cloud-platform-i

https://stackoverflow.com/questions/72569934/google-cloud-platform-gives-pem-error-when-using-third-party-libraries



##
##


## Error: Signature exceeds placeholder length: 4540 > 3322

- Throws in file: node app.js
- Tried with https://github.com/vbuch/node-signpdf

### Error
```
Error: Signature exceeds placeholder length: 4540 > 3322
    at SignPdf.sign (Projects/document-add-certificate/node/digi-sign-doc/node_modules/node-signpdf/dist/signpdf.js:173:13)
    at Projects/document-add-certificate/node/digi-sign-doc/app.js:73:35
```
### SOLUTION:

Check the SIGNATURE_LENGTH property you are passing in code
In above error change to 4540 or more according to error

##
##

## Error: Template

- 

### Error
```

```
### SOLUTION:


##
##

##
##
##
