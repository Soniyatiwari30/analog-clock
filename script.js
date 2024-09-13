var hourHand = document.querySelector('.hour-hand')
var minHand = document.querySelector('.min-hand')
var secHand = document.querySelector('.sec-hand')

function setClock() {
    var currentDate = new Date();


    var seconds = currentDate.getSeconds();
    var minutes = currentDate.getMinutes();
    var hours = currentDate.getHours();

    var secondsDegrees = ((seconds / 60) * 360) + 90;
    var minutesDegrees = ((minutes / 60) * 360) + 90;
    var hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    secHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
} 


setTimeout(function(){
    setInterval(setClock, 1000)
}, 5000)

