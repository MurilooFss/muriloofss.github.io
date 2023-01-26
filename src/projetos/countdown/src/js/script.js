function calcTime(){
    const date = new Date().getTime()
    const eventDay = new Date('mar 27, 2023 00:00:00').getTime();
    const today = eventDay - date
    let thisDay = Math.floor(today / (1000*60*60*24))
    let thisHour = Math.floor((today % (1000*60*60*24))/(1000*60*60))
    let thisMin = Math.floor((today % (1000*60*60))/(1000*60))
    let thisSec =Math.floor((today % (1000*60))/(1000))
    let space = ' '
    if(today < 0){
        document.querySelector('.countdown').innerHTML=('<h1>Evento Finalizado!!!</h1><h3>Fique Ligado nas nossas redes sociais para saber as próximas datas!</h3>')
    }

    document.querySelector('#secondsTime').textContent=(space+ addZero(thisSec))
    document.querySelector('#minutesTime').textContent=(space+addZero(thisMin))
    document.querySelector('#hoursTime').textContent=(space+addZero(thisHour))
    document.querySelector('#daysTime').textContent=(space+addZero(thisDay))  
}
function addZero(value){
    x = value <10 ? '0' + value : value
    return x
}
calcTime()
setInterval(calcTime, 1000)
