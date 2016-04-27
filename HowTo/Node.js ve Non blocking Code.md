#Node.js ve Non-Blocking Code
Node.js single thread çalışan bir uygulama alt yapısıdır.
non-blocking Fonksiyonlar **fonksiyon(param,callback)** şeklinde bir yapıya sahiptirler. fonksiyon çağrıldıktan çok kısa süre sonra döner. asıl uzun işlem tamamlandığında da callback fonksiyonun çağırır. callback javascript ya da NodeJs'e ait özel bir yapı değildir. sadece bir notasyon kullanım şeklidir. Callback'ler hakkında çok güzel bir site (ingilizce) : http://callbackhell.com/
##Peki işlem arkaplan da nasıl yapılır?
NodeJS yada Javascript multithreading bir alt yapı sunmaz. Tüm işlemler tek thread üzeründe gerçekleşir. MultiThreading işlemlerin yazılımcı tarafından özel olarak yönetilmesi gerekir. Bunun ile ilgili task sistemi kullanılabilir.
## Peki Bu durumda NodeJS bu işi nasıl halleder?
Bu iş bir döngü ile halledilir. NodeJS'in kendine has libuv tabanlı bir loop (döngü) sistemi vardır. Sözde asenkron (SA) bir fonksiyon çağırmak için bu döngünün yapısını bilmek önemlidir. SA bir fonksiyon aslında uzun süreli yapacağı işleri küçük paketlere bölerek bunları ana döngüye ekler. uzun işlem tamamlandığında da callback'i çağırarak işlemini tamamlar.

Ana döngüye ekleme işlemi iki şekilde olabilir.
- setImmediate fonksiyonu
- process.NextTick fonksiyonu

Bu fonksiyonların nasıl çalıştığını anlamak için öncelikle NodeJS döngü yapısını incelemek gerekir.


