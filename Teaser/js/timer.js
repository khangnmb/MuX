var beginDate = new Date(2015, 7, 9, 00, 00, 00, 00);
var timer = new Date();
function getBeginTime() {
    var today = new Date();   
    timer.setTime(Math.abs(beginDate.getTime() - today.getTime()));    
}
function setTimeToElement()
{    
    var diffDays = timer.getDate();
    var hour = timer.getHours();
    var min = timer.getMinutes();
    var sec = timer.getSeconds();
    document.getElementById('ngay').innerHTML = diffDays;
    document.getElementById('gio').innerHTML = hour;
    document.getElementById('phut').innerHTML = min;
    document.getElementById('giay').innerHTML = sec;
   
}
window.onload = function () {
    getBeginTime();
    setTimeToElement()
    setInterval(function () {
        timer.setTime(timer.getTime() - 1000);
        setTimeToElement();
    }, 1000);
}