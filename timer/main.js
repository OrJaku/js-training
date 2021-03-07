clockDiv = document.getElementById("clock")

const clock = () => {
    var date = new Date();
    console.log(date)
    console.log("---------")
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    clockDiv.innerHTML = `${hours}:${minutes}:${seconds}`
}
setInterval(clock, 1000)