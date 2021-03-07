clockDiv = document.getElementById("clock")

const clock = () => {
    var date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    valueList = [hours, minutes, seconds]
    strValueList = [hours, minutes, seconds]

    for (let i=0; i<valueList.length; i++ ){
        let toStr = valueList[i].toString()
        if (toStr.length == 1){
            toStr = `0${toStr}`
        }
        strValueList[i] = toStr
    }
    clockDiv.innerHTML = `${strValueList[0]}:${strValueList[1]}:${strValueList[2]}`
}
setInterval(clock, 1000)