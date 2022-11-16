# digi-sign-doc
Digitally Sign Pdf Documents in Node.js

- Code to digital sign pdf documents with p12/pfx certificates.
- Code to digitally timestamp pdf documents with certificates.

##
##
##

## Sign with p12 certificate

### RUN

```
node sign-with-p12.js
```

##
##
##

## Sign with just the private key pem file using Cryto module

### To Run:
```
node sign-with-private-key.js 
```

- https://nodejs.org/api/crypto.html
- https://stackoverflow.com/questions/42075246/digital-signature-with-node-js-crypto
- https://github.com/itsnuwan/digital-signature-for-document-signing


##
##
##

## Timestamp a document with sample algorithm

Takes a document as input to calculate hash and validate.
The app needs to store the hash and timestamp in DB and use it to validate the input or the new created file file for any tampering.

### To Run:
```
// Uses uploaded input.pdf document to calculate hash and validate.
node timestamp-document.js

or  

// Creates a new timestamp text added file to calculate hash and validate.
node timestamp-document_newgen.js
```

##
##
##

# Generating sample local public key, private key and  p12 certificate

```
// generating public key and private key
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365

// generating p12
openssl pkcs12 -in cert.pem -inkey key.pem -out foo.p12 -export -name friendly_name

//verify
openssl pkcs12 -in foo.p12 -nokeys -info
```

https://stackoverflow.com/a/68840322

##
##
##

# Important Links*
- [Digital Signatures in a PDF](https://www.adobe.com/devnet-docs/etk_deprecated/tools/DigSig/Acrobat_DigitalSignatures_in_PDF.pdf) 
Process of signing a document

- [How to digitally sign a PDF programmatically using Javascript/Nodejs](https://medium.com/caution-your-blast/how-to-digitally-sign-a-pdf-programmatically-using-javascript-nodejs-54194af7bdc3) - Signing a PDF with Javascript - What is a PDF signature
[Video Explaination](https://www.youtube.com/watch?v=6XsDVx0tjLc)

- [Signing a PDF with Javascript - Going though the code](https://www.youtube.com/watch?v=OFZK5lc70OI)

- https://www.sohamkamani.com/nodejs/rsa-encryption/

# Checkout probably useful libraries
- [pdf-lib](https://pdf-lib.js.org/) - Manipulate/Edit/Create Pdf documents
- https://github.com/vbuch/node-signpdf
- https://github.com/digitalbazaar/forge
- https://github.com/Hopding/pdf-lib
Create and modify PDF documents in any JavaScript environment.
https://pdf-lib.js.org/
- https://github.com/jorangreef/sudo-prompt
- https://github.com/jfromaniello/mac-ca

##
##
##

# What features we have?

- Sign pdf document with p12 certificate.
- Returns pdf document which is signed with the certificate
- Sign pdf document with just the pem key.
- Return detached signature
- node spawining cli commands to retrieve public certificates in local.
- Time stamping with sample algo

# What to explore and add?

- verifying of both signatures?
- How to sign document with returned detached signatutre?
- extracting signature from document?
- veryfing signed document if valid signature?
- encrypt and secrypt messages with keys



##
##
##

