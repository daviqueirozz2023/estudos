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
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
            } else if(idade >= 10 && idade < 21){
                //jovem
            }else if (idade < 50){
                //Adulto
            }else {
                //idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
            } else if (idade < 21) {
                //Jovem
            }else if (idade < 50) {
                //adulto
            }else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        //res.style.display="none"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}