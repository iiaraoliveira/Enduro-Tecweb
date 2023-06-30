const carroPrincipal = document.getElementById("carroPrincipal");
let distancia = 45;

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "37") {
    if (distancia < 90) distancia += 1;
    carroPrincipal.style.right = `${distancia}%`;
    // left
  } else if (e.keyCode == "39") {
    if (distancia < 100 && distancia > 0) distancia -= 1;
    carroPrincipal.style.right = `${distancia}%`;
    // right
  }
}



// var x = 0
// vary = 0
// window.addEventListener("keydown", function(event){
//     var tecla = event.keyCode
//     if(tecla == "39"){
//         x=x+10
//         this.document.getElementById("carroPrincipal").style.right=x+"px"
//     }
// })