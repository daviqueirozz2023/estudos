function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')   // var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `idade calculada: ${idade}`
        var gênero = 'Homen'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','menino.png')
            } else if(idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src','homem-jovem.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','homem.png')
            }else {
                //idoso
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','mulher-jovem.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        //res.style.display="none"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}