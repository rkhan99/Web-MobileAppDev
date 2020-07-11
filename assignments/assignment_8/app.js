var mheading = document.getElementById("min");
var sheading = document.getElementById("sec");
var msheading = document.getElementById("msec");
var sbutton = document.getElementById("start");
var m = 0;
var s = 0;
var ms = 0;
var interval;
function timer(){
    ms++;
    msheading.innerHTML = ms;
    if(ms>=100){
        s++;
        sheading.innerHTML = s;
        ms=0;
    }else if (sec>=60){
        m++;
        mheading.innerHTML = m;
        s = 0;
    }
 }
 function start(){
interval = setInterval(timer,10);
//startbutton.onclick +='disabled';
sbutton.disabled = true; 
}

 function pause(){
    sbutton.disabled = false; 
     clearInterval(interval);
 }
 function reset(){
    sbutton.disabled = false; 
    clearInterval(interval);
    m=0;
    s=0;
    ms=0
    mheading.innerHTML = m;
    sheading.innerHTML = s;
    msheading.innerHTML = ms;
 }