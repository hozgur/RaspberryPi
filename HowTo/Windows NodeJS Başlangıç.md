#Windows platformunda Node.js uygulamaları geliştirme (Portable)
İlk adım haliyle Node'u indirmek. Portable çalışabiliyor bu büyük avantaj ve tek bir exe file'dan oluşuyor.(Node.exe)
Adresi: 64 bit için : https://nodejs.org/dist/v5.10.1/win-x64/node.exe
Adresi: 32 bit için : https://nodejs.org/dist/v5.10.1/win-x86/node.exe

Komut satırında node.exe'yi çalıştırdığımızda node çalışır hale gelir.
Çıkmak için process.exit(0) yazmak yeterlidir.
node -v ile nodejs versiyonu öğrenilebilir.
örneğin şu an bende v5.10.1 

Komut satırında javascript komutlar derhal çalıştırılabilir.
örneğin:
console.log("Hello World!");

npm'in kurulması:
http://nodejs.org/dist/npm/ adresinden indirilir
örneğin ben npm-1.4.9.zip dosyasını indirdim. Ardından bu zip dosyası node.exe'nin olduğu klasöre açılır.

Klasörde
```
node.exe
node_modules
npm.cmd
```
dosyaları oluşacaktır.

