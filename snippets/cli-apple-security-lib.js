
const {execSync} = require('child_process');


// Get certificates from Keychain Mac
console.log("Getting certificates")
let output = execSync('security find-certificate -a');
// let output = execSync('security find-certificate -a -p');
console.log(output)
console.log(output.toString())


// Getting Certificate By Name
// security find-certificate -c "Certificate Name" -a
console.log("Getting certificate by Name")
let certByName = execSync('security find-certificate -c "ERIKA MUSTERMANN" -a -p');
console.log(certByName.toString())
console.log(JSON.parse(JSON.stringify(certByName)))


// security find-identity
// security find-identity


// listing identities from specific keychain if needed
// $ security list-keychains
// $ security find-identity /Users/hborders/Library/Keychains/login.keychain-db

// Getting Private Key By Name
// security find-key -c "Certificate Name" -a
// security find-key -c "BEF71BFC4315355560ADB4ABCD29704139D2FC3D"
console.log("Getting private by Name")
let pkeyByName = execSync('security find-key -c "BEF71BFC4315355560ADB4ABCD29704139D2FC3D"');
console.log(pkeyByName.toString())
// console.log(JSON.parse(JSON.stringify(pkeyByName)))



// https://ss64.com/osx/security.html



//Other
//security -v list-keychains