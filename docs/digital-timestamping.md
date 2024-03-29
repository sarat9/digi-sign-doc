# Digital Timestamping
A timestamp proves that a contract, invoice, tax declaration, receipt or software was signed at a certain date and time. A Timestamp authority (TSA) typically provides two types of services, proof of time of a signature and long-term validity. 

- proof of time of a signature: 
Secure timestamps can be applied in digital signing of code and documents, to ensure the date and time of signing. 

- long-term validity
A long-term validity (LTV) signature helps preserve documents to enable validation of the signature also in the future.

- Trust service provider
Trust service providers (TSPs) can offer RFC3161-compliant timestamping as a service to other organizations.



A trusted digital timestamp gives you strong legal evidence that the contents of your work existed at a point-in-time and have not changed since that time. The procedures maintain complete privacy of your documents themselves.


### Problem: 
Timestamps that rely on system clocks are not enough, since it’s not difficult to alter the date and time locally on a machine. Plus, there are a variety of tools online that will allow you to change the modified, created and last accessed date of a document or PDF

Regarding digital signatures, it is an online mechanism that uses the services of a third party to generate a temporary certificate. These certificates validate a digital signature for a specified time and demonstrate that the data has existed and has not been altered from a specific instant in time. When the time limit for these certificates expires, People can assume that the signer did not renew the certificate and, therefore, the signature is no longer valid.



### What is a Trusted Timestamp?
This is where ‘trusted’ timestamping comes in.  These types of timestamps are generated by a trusted third party using secure FIPS-compliant hardware, so they are not subject to manipulation by a local user. Trusted timestamping means that you can say with a high level of certainty that the date on the timestamp is accurate and hasn’t been tampered with.

[RFC 3161](https://datatracker.ietf.org/doc/html/rfc3161) outlines the requirements a third party must meet in order to operate as a Timestamping Authority (TSA).

A digital signature proves who has signed a file. A time stamp shows when the file was signed. 

- https://www.globalsign.com/en-in/blog/what-is-timestamping-how-does-it-work

### (Time Stamping Authority) TSA
Timestamping consists of taking advantage of the services that provide timestamping services, these companies can be called the Time Stamping Authority (TSA), and they act as certification service providers.


## How it works

When a document is time stamped, a cryptographic hash is generated based on the contents of the document. This hash is then signed with a private key, creating a digital signature. The signed hash, along with the public key and other metadata, is then timestamped by a trusted third party.


## Image


### Timestamping
![image](https://user-images.githubusercontent.com/17333491/180411640-baa149e1-50ff-41f9-9e17-eb17665c5d2e.png)

### Validating
![image](https://user-images.githubusercontent.com/17333491/180412145-7c5ac0e7-ae55-4e17-8bce-bee78cf2f46c.png)

- https://www.digistamp.com/application/files/2615/7527/3348/Trusted_timestamping.jpg
- https://www.digistamp.com/technical/how-a-digital-time-stamp-works

# Libraries which provide solution
- (Paid) - https://help.syncfusion.com/file-formats/pdf/working-with-digitalsignature?_ga=2.10296246.2076360760.1636015881-1306415495.1635425023#adding-a-timestamp-to-pdf-document
- (Paid) - https://www.pdftron.com/documentation/core/guides/features/signature/dts/#about-doctimestamp
- https://github.com/disig/TimeStampClient

# Links
- https://www.digistamp.com/technical/how-a-digital-time-stamp-works
- https://www.globalsign.com/en-in/blog/what-is-timestamping-how-does-it-work
- https://www.primekey.com/solutions/time-stamping/
- https://pdf.wondershare.com/pdf-knowledge/include-a-timestamp-for-digital-signature.html
- https://www.digistamp.com/support/why-does-product-work#securetime
- https://www.digistamp.com/support/frequently-asked-questions/time-stamp-details#standard
- https://www.youtube.com/watch?v=uAQBBZAfBL0
- https://www.adobe.com/devnet-docs/acrobatetk/tools/DigSigDC/Acrobat_DigitalSignatures_in_PDF.pdf


# Check
- node-signpdf inwork pr for timestamping
https://github.com/vbuch/node-signpdf/pull/103/files

- https://github.com/disig/TimeStampClient
- https://www.example-code.com/nodejs/timestamp_client.asp





# Free TSA *
- https://www.freetsa.org/index_en.php
- https://www.freetsa.org/guide/
- https://www.freetsa.org/guide/demonstration-digitally-signed-PDF-documents.html
- https://kbpdfstudio.qoppa.com/list-of-timestamp-servers-for-signing-pdf/



# Pending
- Attach it Document
- If attached, the hash changes or not 
- Where to save the data

TRY

- like KSI -  first print timestamp and add signature
- add metadata to doc  - find it in ksi sdk code