clockDiv = document.getElementById("clock")
toEnd = document.getElementById("toEnd")

setDate = new Date("2021-12-20 00:00:00")
const clock = () => {
    var date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    valueList = [hours, minutes, seconds];
    strValueList = ["hours", "minutes", "seconds"];
    function timeToString(oldList, newList){
        for (let i=0; i<oldList.length; i++ ){
            let toStr = oldList[i].toString()
            if (toStr.length == 1){
                toStr = `0${toStr}`
            }
            newList[i] = toStr
        }
    };
    timeToString(valueList, strValueList)

    clockDiv.innerHTML = `Current time: ${strValueList[0]}:${strValueList[1]}:${strValueList[2]}`;
    currentDate = date.getTime();
    delta = (setDate - currentDate)/1000;
    endDays = delta / 60 / 60 / 24 

    endTime = endDays % 1
    endHoursDec = (endTime * 24 )
    endHours = Math.floor(endHoursDec)

    endTime = endHoursDec % 1
    endMinDec = (endTime * 60 )
    endMin = Math.floor(endMinDec)

    endTime = endMinDec % 1
    endSecDec = (endTime * 60 )
    endSec = Math.floor(endSecDec)

    strEndValueList = ["hours", "minutes", "seconds"];

    valueList = [endHours, endMin, endSec]
    timeToString(valueList, strEndValueList)


    toEnd.innerHTML = `Days: ${Math.floor(endDays)} | ${strEndValueList[0]}:${strEndValueList[1]}:${strEndValueList[2]}`;


}
setInterval(clock, 1000)