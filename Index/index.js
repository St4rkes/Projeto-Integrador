var radio = document.querySelector('.manual-btf')
var cont = 1
document.getElementById('radio1').checked = true


function nextImg(){
     cont++

     if(cont > 4){
        cont = 1
     }

     document.getElementById('radio'+cont).checked = true
}

setInterval(() => {
   nextImg() 
}, 5000);


