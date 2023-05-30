const horasC = document.getElementById('horasC')
const minutosC = document.getElementById('minutosC')
const segundosC = document.getElementById('segundosC')

const cronometro = setInterval(function time() {
    let dateToday = new Date();
    
    let hrC = dateToday.getHours();
    let minC = dateToday.getMinutes();
    let sC = dateToday.getSeconds();
    if(hrC < 10) hrC = '0' + hrC;
    
    if(minC < 10) minC = '0' + minC;
    
    if(sC < 10) sC = '0' + sC;
    
    horasC.textContent = hrC;
    minutosC.textContent = minC;
    segundosC.textContent = sC;
})

