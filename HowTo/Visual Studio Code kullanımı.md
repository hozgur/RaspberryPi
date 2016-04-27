#MS Visual Studio Code kullanımı

Code https://code.visualstudio.com/ adresinden indirilebilir.


Bu yazı yazılırken geçerli sürüm 1.0.0 idi.
Node.js'i Windows sisteme yüklemeden klasör içerisinden yazılım geliştirmek için portable olarak kullanmak istedik.
Bu durumda Node.exe'nin olduğu klasörü (Daha önce Başlangıç metninde oluşturulan klasör) Code'da openFolder ile açıyoruz.
Ardından new File ile yeni bir dosya yaratıp bunu app.js olarak aynı klasöre kaydediyoruz.
Şu an komut satırından Node app.js diyerek programı çalıştırabiliriz.
Ama Code'da debug yapmak istiyorsak Code'un sol ekranında 'Böcek giremez' simgesine basarak debug yapabiliriz. Ama bunun için Code bir proje konfigurasyon dosyasına ihtiyaç duyar. Eğer yoksa bunu otomatik olarak launch.json ismiyle oluşturacaktır.
Dosyanın İçeriği Şu şekilde olacaktır:
```javascript
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Launch",
			"type": "node",
			"request": "launch",
			"program": "${workspaceRoot}/app.js",
			"stopOnEntry": false,
			"args": [],
			"cwd": "${workspaceRoot}",
			"preLaunchTask": null,
			"runtimeExecutable": null,
			"runtimeArgs": [
				"--nolazy"
			],
			"env": {
				"NODE_ENV": "development"
			},
			"externalConsole": false,
			"sourceMaps": false,
			"outDir": null
		},
		{
			"name": "Attach",
			"type": "node",
			"request": "attach",
			"port": 5858,
			"address": "localhost",
			"restart": false,
			"sourceMaps": false,
			"outDir": null,
			"localRoot": "${workspaceRoot}",
			"remoteRoot": null
		}
	]
}
```
Burada dikkat edilmesi gereken kısım biz Node'u local olarak çalıştırdığımız için

`"runtimeExecutable": null` 
olan kısmı

`"runtimeExecutable": "${workspaceRoot}/node.exe",`
şeklinde değiştirmemiz gerekmekte. Bu değişikliği yaptıktan sonra Play icon'una bastığımızda yazdığımız kod çalışacaktır.
Bu dosyada dikkat edilirse Launch ve Attach şeklinde iki ayrı konfigurasyon oluşturulmaktadır.
Biz şu an sadece ilk Launch isimli Configurasyon ile ilgileniyoruz. Attach konusu sonra işlenecektir.

Ardından app.js içine console.log("Hello World!"); yazıp. çalıştırdığımızda ilk yazılımız hazır.


