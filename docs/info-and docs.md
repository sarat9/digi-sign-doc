# Things To Know

## Digital Signatures
PDF digital signature and timestamp are the best ways to protect your PDF files from being forged.


## Difference between .p12 and .pem file

- P12/PFX :
Tt’s the combined format that holds the private key and certificate and is the format most modern signing utilities use. Same with alternate extensions are .PFX, .PKCS12.
.p12 is an alternate extension for what is generally referred to as a “PFX file”

- PEM : 
This is a container format that may include just the public certificate (such as with Apache installs, and CA certificate files /etc/ssl/certs), or may include an entire certificate chain including public key, private key, and root certificates.

https://medium.com/@rachnaios/difference-between-p12-and-pem-file-fa85d38e50bf

- What is PEM Format?
https://knowledge.digicert.com/quovadis/ssl-certificates/ssl-general-topics/what-is-pem-format.html


##


## Converting key formats
pem private key, certificate, public key, p12/pfx

- PEM to P12
openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile more.crt 

https://help.hcltechsw.com/appscan/Standard/9.0.3/en-US/t_ConvertthepfxCertificatetopemFormat068.html

- What is PEM Format?
https://knowledge.digicert.com/quovadis/ssl-certificates/ssl-general-topics/what-is-pem-format.html


##
##
##
##
##
