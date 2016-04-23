

var Blynk = require('blynk-library');
var Gpio = require('onoff').Gpio;
var AUTH = 'ff7f0bca48214a8fafef39ca27c0d637';

var blynk = new Blynk.Blynk(AUTH);

var v1 = new blynk.VirtualPin(1);
var v9 = new blynk.VirtualPin(9);

var outpin = new Gpio(26, 'out');

v1.on('write', function(param)
{
  console.log('V1:', param[0]);
  outpin.writeSync(param[0]);
});
v9.on('read', function() {
  v9.write(new Date().getSeconds());
});