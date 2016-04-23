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

