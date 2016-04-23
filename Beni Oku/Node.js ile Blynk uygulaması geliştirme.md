#NodeJS ile Blynk uygulaması geliştirme

Blynk kütüphanesi Android yada IOS mobil cihazlar üzerinden Remote uygulamalar yazmamızı sağlayan bir sistemdir.
Node.js ile programlanabilir. Mobil cihazlarda çok hızlı arayüz tasarlanabildiği için başlangıç projesi olarak denemeler yapabiliriz.

Bu kütüphaneyi kullanabilmek için öncelikle hazırlık yapmalıyız:
Aşağıdaki komutları RaspberryPi'de çalıştıralım.
```
sudo apt-get install build-essential
sudo npm install -g npm
sudo npm install -g onoff
sudo npm install -g blynk-library
```
İlk iki komut daha önce nodejs'i güncellediğimiz için gerekmeyecektir ama yine de yazdım. Tekrar çağırmakta sıkıntı yok
ardından
aşağıdaki test kodu ile deneme yapabiliriz.
```
var Blynk = require('blynk-library');

var AUTH = 'AUTH-CODE';

var blynk = new Blynk.Blynk(AUTH);

var v1 = new blynk.VirtualPin(1);
var v9 = new blynk.VirtualPin(9);

v1.on('write', function(param) {
  console.log('V1:', param[0]);
});
v9.on('read', function() {
  v9.write(new Date().getSeconds());
});
```
Bu program çalıştırıldığında haberleşme görülebilir.

Şimdi hardware pinleri kontrol edelim. Öncelikle Pin Diagramına ihtiyacımız var. Benim kullandığım RaspberryPi 2'nin pin diagramı şekildeki gibidir.
![Rasp 2 Pins](RaspberryPi/Beni Oku/Images/RP2_Pinout.png)

```
var Blynk = require('blynk-library');
var os = require('os');
var Gpio;
if(os.platform() == 'win32')
{
  Gpio = require("./MockGPIO").Gpio;
}
else
{
  Gpio = require('onoff').Gpio;  
}

var AUTH = 'ff7f0bca48214a8fafef39ca27c0d637';
var outpin = new Gpio(26, 'out');
var blynk = new Blynk.Blynk(AUTH);

var v1 = new blynk.VirtualPin(1);
var v9 = new blynk.VirtualPin(9);

v1.on('write', function(param)
{
  console.log('V1:', param[0]);
  outpin.writeSync(Number(param[0]));
});
v9.on('read', function() {
  v9.write(new Date().getSeconds());
});
```
Bu örnekte GPIO kütüphanesini kullanarak dijital pin açık kapatmayı başardık.
Bu Örnekte ek olarak Windows ortamında GPIO kütüphanesi çalıştırlamayacağı için fake bir gpio kütüphanesi yazıldı. os.platform() komutu ile eğer işletim sistemi windows ise o nesnenin kullanılması sağlandı.

Onun için de aşağıdaki içeriği görülen mockGPIO.js dosyası aynı dizinde kullanıldı.
```
"use strict";
class MockGPIO
{
    constructor(pin,direction)
    {
        this.pin = pin;
        this.direction = direction;
    }
    writeSync(val){console.log("Pin write:"+val);}
}

module.exports =
{
    Gpio: MockGPIO   
}
```
