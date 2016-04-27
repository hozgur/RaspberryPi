#Raspberry Pi Başlangıç
(22/4/2016 Tarihinde geçerli sürümler için geçerlidir. Yeni sürümlerde işlemler farklılık gösterebilir.)
Öncelikle Bir Raspberry Pi ve SDCard'a ihtiyacımız var. SDCard en az 8 GB olmalı.
İlk adım SDCard SDFormatter4 ile formatlanır. Program: https://www.sdcard.org/downloads/formatter_4/ adresinden indirilebilir.
Eğer SD Card sıfır değil ise Partion'ları silmek gerekebilir. Bunun için Windows'un DiskPart commanline utility'si kullanılabilir.
Ardından Raspberrypi.org sitesinden NOOBS indirilir. Adresi: https://www.raspberrypi.org/downloads/noobs/
İndirilen zip dosyası bir klasöre açılır ve içeriği SD karta kopyalanır.
Ardından SDCard Raspberrypi'ye takılarak power kablosu takılır. Ardından gelen menüden RaspbianPi işletim sistemi kurulur.
Sistem pi user'ı ile kurulu gelir, şifresi raspberry dir.
Terminal açılaral ```passwd``` komutu ile şifre değiştirilebilir.
GUI üzerinden internet config ayarları yapılır.
Node hali hazırda yüklü gelir fakat eski sürümdür. Bu nedenle önce onu kaldırıp yenisini kurmalıyız.
Herşeyden önce aşağıdaki komutlarla sistemi güncellemek gerekir. (sudo komutu superuser do demek yani admin yetkisi ile çalışmayı sağlar.)
```
sudo apt-get update 
sudo apt-get upgrade
```
Bu komutlardan sonra ben yeniden başlatmayı tervih ettim. bunun için aşağıdaki komutu girmek yeterli:
```
sudo shutdown -r
```

Aşağıdaki komutlar ile node ve diğer ürünler kaldırılır.
```
sudo apt-get remove nodered
sudo apt-get remove nodejs nodejs-legacy
```
Ardından son arm nodejs sürümü indirilir ve kurulur.
```
wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb
```
Eğer npm sistemde yoksa (npm yazıldığında hata mesajı ile karşılaşılıyor ise)
```
sudo apt-get install npm
```
komutu ile npm kurulur.

Artık sistem kullanmaya hazırdır.

RaspberryPi'yi her zaman klavye mouse monitor ile kullanmak mantıksız olduğu için uzaktan bağlanmamız şart. Bunun için SSH Terminal bağlantısı gerekmekte.
Bu altyapı RaspberryPi'da zaten var Windows'da sadece bir SSH Terminal client uygulamasına ihtiyacımız var. Bunun için **putty**'yi kullanabiliriz. putty internetden kolayca bulunup indirilebilir.
Daha önce RaspberryPi'ye verdiğimiz statil IP adresini verip bağlanmamız yeterlidir.

