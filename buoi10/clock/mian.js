    var dates = document.getElementById('date');
    var hours = document.getElementById('hour');
    var mintes = document.getElementById('mintes');
    var seconds = document.getElementById('second');


function clock(){
        var date = new Date().getDate();
    var hour = new Date().getHours();
    var minte = new Date().getMinutes();
    var second = new Date().getSeconds();

    dates.innerHTML = date;
    hours.innerHTML = hour;
    mintes.innerHTML = minte;
    seconds.innerHTML = second;
}
var result = setInterval(clock,1000)



