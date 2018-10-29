const getDate = () => {
    const date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    const clockTime = `${hours - 12}:${minutes <= 9 ? '0' + minutes : minutes}:${seconds <= 9 ? '0' + seconds : seconds}`;

    const timeDisplay = document.getElementById("time");
    const secondHand = document.getElementById('secondHand');
    const minuteHand = document.getElementById('minuteHand');
    const hoursHand = document.getElementById('hourHand');
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;

    timeDisplay.innerHTML = clockTime;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function go() {
    setInterval(getDate, 1000);
};

go()