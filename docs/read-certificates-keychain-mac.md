# Read, Extract, Add Certificates from and to Apple Keychain

##
##
##
##
##

## iOS: Adding a Private Key to the devices KeyChain

Official response from Apple on this exact subject was that it was unsupported. The only supported way of getting private keys into the Keychain was through PKCS#12 files.

https://stackoverflow.com/questions/9917598/ios-adding-a-private-key-to-the-devices-keychain


## Can we get a private key from a certificate ?
You can't get a private key from a certificate, because the private key isn't in the certificate, and you can't get it from a PEM file unless the PEM file contains it, which ain't necessarily so,
A Certificate is supposed to be public and can be distributed, but private key (as the name suggest) is supposed to be kept secret. So a certificate can never contain a private key.

You mentioned, you have a ´.pem´ file too. What is it's content? Does it start with -----BEGIN RSA PRIVATE KEY-----. If yes, it would be your private key.

https://stackoverflow.com/questions/43384627/how-to-get-rsa-key-from-begin-certificate-from-crt-and-pem-file

## Accessing Keychain private keys through Node
Node has Open PR to allow access to keychain. 
Only apple frameworks have access to keychain. 
https://github.com/nodejs/node/issues/39657 

Last checked: 2022 

## Listing Keychain certs with Apple security library cmd
Apple security library

```
// identities
security find-identity 

// public keys
security find-certificate -a
security find-certificate -a -p
security find-certificate -c "Certificate Name" -a
security find-certificate -c "ERIKA MUSTERMANN" -a

// private keys
security find-key
security find-key -a

```

Reading lines from output
```
security dump-keychain | awk -F'=' '/0x00000007/ { print $2 }'
```
https://apple.stackexchange.com/questions/276548/list-all-keys-added-to-keychain-using-security-add-generic-password


#### Apple Security library Code Interface
- https://developer.apple.com/security/
- https://developer.apple.com/documentation/securityinterface
- https://developer.apple.com/documentation/security/certificate_key_and_trust_services/identities


##
##


# Use Node child process to access apple security lib commands

- Try with node spawn
https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js


- Sudo Access GUI Node 
https://github.com/jorangreef/sudo-prompt

https://stackoverflow.com/questions/65699160/electron-import-x509-cert-to-local-keychain-macos-the-authorization-was-deni


##
##
##

## DotNet coding interface to extract certificates from KeyChain

- https://stackoverflow.com/questions/13204940/sign-pdf-with-itextsharp-5-3-3-and-usb-token

- https://stackoverflow.com/questions/43928064/export-private-public-keys-from-x509-certificate-to-pem

Password Protected p12s

- https://stackoverflow.com/questions/63430527/how-to-get-private-key-as-byte-of-a-password-protected-pfx-fetched-from-azure

- https://stackoverflow.com/questions/54483371/cannot-export-rsa-private-key-parameters-the-requested-operation-is-not-support

- https://stackoverflow.com/questions/43928064/export-private-public-keys-from-x509-certificate-to-pem


##
##
##
##
##
