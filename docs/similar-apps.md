# Similar Signing Services

## Nextsense
https://developers.nextsense.com/changelog-se-pdf.nspx.nspx

- Installed both extention and client app
- Somehow extention invokes the mac client app
- CLient app Shows only certs with private keys
- Doesnt let us use public keys while signing
- Public key input boxwas just to for us copy it, it loads the data itself
- Need to build the native client app as such

mono-sgen64 - 
mono is a wrapper for non windows platforms for .net apps

ps aux | grep mono 
saratchandrae    87809   0.0  0.3  5602536  91408   ??  S     1:18AM   0:03.26 /Library/Frameworks/Mono.framework/Versions/Current/Commands/mono /Users/MacHostApplication/SigningApplication.exe

uses iTextSharp internally for signing

## Other
- Digicert
- Infocert
- Aruba

