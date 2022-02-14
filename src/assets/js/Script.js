var countDownDate = new Date("Feb 16, 2022 13:00:00").getTime(); // set date dulu
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    if(days < 10){days = "0" + days;}
    var day1 = days.toString().substring(0,1);
    var day2 = days.toString().substring(1,2);
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if(hours < 10){hours = "0" + hours;}
    var hours1 = hours.toString().substring(0,1);
    var hours2 = hours.toString().substring(1,2);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if(minutes < 10){minutes = "0" + minutes;}
    var minutes1 = minutes.toString().substring(0,1);
    var minutes2 = minutes.toString().substring(1,2);
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds < 10){seconds = "0" + seconds;}
    var seconds1 = seconds.toString().substring(0,1);
    var seconds2 = seconds.toString().substring(1,2);

    
    
    
    

    document.getElementById("text-day-1").innerHTML = day1;
    document.getElementById("text-day-2").innerHTML = day2;
    document.getElementById("text-hour-1").innerHTML = hours1;
    document.getElementById("text-hour-2").innerHTML = hours2;
    document.getElementById("text-minute-1").innerHTML = minutes1;
    document.getElementById("text-minute-2").innerHTML = minutes2;
    document.getElementById("text-sec-1").innerHTML = seconds1;
    document.getElementById("text-sec-2").innerHTML = seconds2;

    

})