/**
 * Time-Stamping Document using Cryto module
 * 
 * uses crypto library(now built in with nodejs) to generate digital signature for a document.
    const crypto = require('crypto');

    - https://nodejs.org/api/crypto.html
 */

const crypto = require('crypto');
const fs = require('fs');
const encrypter = require('./lib/encrypter')



const { encryptedHash, timestamp } = generateTimestampCertificateForDocument()

validateTimestampCertificateForDocument(encryptedHash, timestamp)






function generateTimestampCertificateForDocument() {
    // File/Document to be signed
    const doc = fs.readFileSync('input.pdf');


    console.log('\n\n')
    // Calculating Document Hash
    console.log("Calculating Hash")
    const docHash = calculateHash(doc)
    console.log("\n-----------Document Hash---------------")
    console.log(docHash)



    // Get TSA Timestamp
    console.log("\n\n-----------Time for Timestamp-----------")
    const timestamp = getTSAtime()
    console.log(timestamp);



    //Calculate new Hash of both Document Hash and timestamp
    console.log('\n\n-----------Combine Document and Timestamp by append or some better algos-----------')
    const docWithTimestamp = combineDocumentHashAndTimestamp(docHash, timestamp)
    console.log(docWithTimestamp)
    console.log('\n-----------Calculated new Hash of both Document Hash and timestamp-----------')
    let docWithTimestampHash = calculateHash(docWithTimestamp)
    console.log(docWithTimestampHash)




    // Encrypt the new hash with tsa private key
    console.log('\n\n\n-----------Encrypt the new hash with tsa Private Key-----------')
    console.log('\n------> Digital signature of the timestamp : \n')
    const encryptedHash = encrypter.encryptStringWithRsaPrivateKey(docWithTimestampHash, 'certs/private_key.pem')
    console.log(encryptedHash)

    console.log('\n\n------------DONE------------\n\n')

    return {
        encryptedHash, timestamp
    }

}


function validateTimestampCertificateForDocument(encryptedHash,timestamp){
    // -- Verification / Validation
    console.log('-------------------------------------------------------')
    console.log('-------------------------------------------------------')
    console.log('-------------------------------------------------------')
    console.log('------Validating the Timestamp of the Document------')
    console.log('-------------------------------------------------------')


    // Decrypt the Digital Signature of timestamp with the public key of the tsa
    console.log('\n------Decrypting the Digital Signature of timestamp with the public key of the tsa------')
    const decryptedHash = encrypter.decryptStringWithRsaPublicKey(Buffer.from(encryptedHash, 'base64'), 'certs/public_key.pem')
    console.log(decryptedHash)
    


    // Follow again the previous steps to generate the hash of document + timestamp with the timestamp provided
    console.log('\n\n------Generate hash of document + timestamp------')
    const doc = fs.readFileSync('input.pdf');
    const docHash = calculateHash(doc)
    const docWithTimestamp = combineDocumentHashAndTimestamp(docHash, timestamp)
    let docWithTimestampHash = calculateHash(docWithTimestamp)
    console.log(docWithTimestampHash)

    
    // Compare the public key decrypted value with the hash generated with document + given its timestamp
    console.log('\n\n------Document is Valid ??? : ------')
    console.log(decryptedHash === docWithTimestampHash)
    console.log('\n\n------Validated------')
}





function calculateHash(doc_buffer, encryptAlgo = 'sha256') {
    // encryptAlgo : sha256, sha512, sha1, etc
    let sum = crypto.createHash(encryptAlgo); // optionally also pass secret password
    sum.update(doc_buffer);
    const hex = sum.digest('hex'); // digest : hex, base64m binary, etc
    return hex;
}

function getTSAtime() {
    // Timestamp from timestamping authority following some time rules
    let timestamp = Date.now().toString()
    return '1658474922805';
}

function combineDocumentHashAndTimestamp(docHash, timestamp) {
    // Combine Document and Timestamp by append or some better algos
    const docWithTimestamp = docHash + '-' + timestamp
    return docWithTimestamp
}




/** Pending
 * 
 * attach timestamp to document
 * extract timestamp of the document
 * calculate hash of timestamped document
 * 
 * https://nodejs.org/api/crypto.html#class-sign
 * 
 */






