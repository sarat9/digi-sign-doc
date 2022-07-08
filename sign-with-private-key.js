/**
 * Sign with just the private key pem file using Cryto module
 * 
 * uses crypto library(now built in with nodejs) to generate digital signature for a document.
    const crypto = require('crypto');

    - https://nodejs.org/api/crypto.html
    - https://nodejs.org/api/crypto.html#class-sign
    - https://stackoverflow.com/questions/42075246/digital-signature-with-node-js-crypto
    - https://github.com/itsnuwan/digital-signature-for-document-signing
 */


const crypto = require('crypto');
const fs = require('fs');

// See keys/README.md on how to generate this key
const private_key = fs.readFileSync('certs/private_key.pem', 'utf-8');

// File/Document to be signed
const doc = fs.readFileSync('input.pdf');

// Signing
const signer = crypto.createSign('RSA-SHA256');
signer.write(doc);
signer.end();

// Returns the signature in output_format which can be 'binary', 'hex' or 'base64'
var signature = signer.sign({ 'key': private_key, 'passphrase': 'password' }, 'base64');

// Detached Signature
console.log('Digital Signature: ', signature);


// Verify Certificate
const verification = crypto.createVerify('SHA256');
verification.write(doc);
verification.end();
const public_key = fs.readFileSync('certs/public_key.pem', 'utf-8');

console.log("Verifying Signature validity using public key")
console.log(verification.verify(public_key, signature, 'base64'));


/** Pending
 * signer.update?
 * detached signatutre atach to document?
 * extracting document
 * download binary format of signature
 * 
 * 
 * https://nodejs.org/api/crypto.html#class-sign
 * 
 */






