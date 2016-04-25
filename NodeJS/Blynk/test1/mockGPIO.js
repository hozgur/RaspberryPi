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