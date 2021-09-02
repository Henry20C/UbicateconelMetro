const color=document.getElementById('color_fondo')
const numero=document.getElementById('numero')


let cantidad=0
let tiempo=setInterval(() => {
    cantidad+=1
    color.style.height=`${cantidad}%`
    numero.textContent=cantidad
    if(cantidad===1230){
        clearInterval(tiempo)
    }
}, 3);