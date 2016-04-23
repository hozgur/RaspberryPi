#Raspberry Pi Node.js ile Uygulama Geliştirme
Başlangıç.md dosyası tamamlandı ise RaspberryPI yazılım geliştirmeye hazır demektir. O zaman yazılım geliştirmeye başlayabiliriz.
Geliştirdiğimiz yazılımların kod takibi ve server'da saklanabilmesi ve başka bilgisayarlarda geliştirilebilmesi için git kullanmamız en mantıklısıdır.
Git hakkında bilgi için: https://backlogtool.com/git-guide/en/ adresinden ne olduğu ve nasıl kullanıldığı öğrenilebilir.

Git RaspberryPI'da yüklü olarak gelir.
Git'i kullanmak için önce temel ayarlarını yapıyoruz.

```
$ git config --global user.name "<Username>"
$ git config --global user.email "<Email address>"
```
Ardından Projelerimiz için bir yer oluşturalım.
**cd** komutu ile kendi Home dizinimize geldikten sonra
**mkdir Projects** komutu ile Projects klasörü oluşturalım.
Daha önce **github.com** sistesinde oluşturduğumuz bir projeyi şimdi kendimize clone'layabiliriz.
Önce **cd Projects** diyerek dizinin içine girelim sonra
```
git clone https://github.com/user/project
```
komutu ile projeyi kendi dizinimize almış oluruz. Örneğin benim yarattığım RaspberryPi klasörü
 