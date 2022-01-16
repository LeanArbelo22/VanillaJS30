const secondHand = document.querySelector('.sec');
const minsHand = document.querySelector('.min');
const hoursHand = document.querySelector('.hour');


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    //console.log(seconds);
    const secondsDegree = ((seconds / 60) * 360) + 90; 
    /* indica el grado que le corresponde a cada segundo por minuto,
    el + 90 es para anular que por defecto comience a los 90deg */
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    
    const mins = now.getMinutes();
    console.log(mins)
    const minsDegree = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(setDate, 1000);