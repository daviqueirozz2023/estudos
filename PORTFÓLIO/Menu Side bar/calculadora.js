function insert(num){

    var numero = window.document.getElementById('resultado').innerHTML;
    window.document.getElementById('resultado').innerHTML = numero + num;

}

function clean() {
   window.document.getElementById('resultado').innerHTML = ""
}

function back(){

   var resultado = window.document.getElementById('resultado').innerHTML;
   window.document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {

   var resultado = document.getElementById('resultado').innerHTML;
   if(resultado) {
       document.getElementById('resultado').innerHTML = eval(resultado);
   }else{
       document.getElementById('resultado').innerHTML = "nada..."
   }
}