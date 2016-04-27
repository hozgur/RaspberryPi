console.log("Async Test");
setTimeout(function(){console.log("Hello World TimeOut"); cont = false;},14500);
var cont = true;
var func1 = function(c) 
{
    var counter = 0;    
    var func2 = function()
    {
        for(b=0;b<10000000;b++)
        {}
        counter++;        
        //console.log(c + ": "+ counter);
        if(cont == true && counter<20)
            setImmediate(func2);
        else
            console.log(c + " ended. ");
    } 
    func2();               
}
for(a=0;a<100;a++)
{
    console.log("Async Test"+ a);
    func1("Process "+a);    
}
console.log("Async Test Last");