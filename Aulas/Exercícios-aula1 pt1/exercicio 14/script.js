function carregar() {
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()  
    
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        msg.innerHTML = `Agora são ${hora} horas Bom dia!.`
        img.src = 'manha.png'
        document.body.style.background = '#e7d6c4'
    } else if(hora >= 12 && hora < 18){
        //Boa Tarde!
        msg.innerHTML = `Agora são ${hora} horas Boa Tarde!.`
        img.src = 'tarde.png'
        document.body.style.background = '#ff7509'
    }else {
        //Boa Noite!
        msg.innerHTML = `Agora são ${hora} horas Boa Noite!.`
        img.src = 'noite.png'
        document.body.style.background = '#274f80'
    }
}