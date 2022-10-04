var display = document.getElementById('display');

var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

var comecar = document.getElementById('comecar');
var parar = document.getElementById('parar');



var cronometroSeg;

var minutoAtual;
var segundoAtual;

var interval;

for(var i = 0; i <= 60; i++){
    minutos.innerHTML+='<option value="'+i+'"> '+i+'</opition>';

}

for(var i = 1; i <= 60; i++){
    segundos.innerHTML+='<option value="'+i+'">'+i+'</opition>';

}

comecar.addEventListener('click',function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes.innerHTML = minutoAtual + ":"+segundoAtual;
    



    interval = setInterval(function(){
        segundoAtual--;
        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;

            }else{ 
            document.getElementById("sound").play();

            clearInterval(interval);
            
        }

        }

       
        display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
   


    },1000);
    let intervalo=0;
    let contador = 0;
    
    while(contador<15){
      intervalo +=1000;
      setTimeout("document.getElementById('bola').style.backgroundColor='red'",intervalo);
      intervalo+=1000;
      setTimeout("document.getElementById('bola').style.backgroundColor='green'",intervalo);
      contador++;
    }

})  

parar.addEventListener('click',function(){
    clearInterval(interval)
     document.getElementById("sound").pause ();
     clearInterval(interval);
});


