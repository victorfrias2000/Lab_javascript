function enviarSaludo() {
    //alert("hola mundo")
    let saludar = document.getElementById('saludo')
    saludar.innerHTML = " Bienvenido! "
}

let listNoticias =["Noticia1","Noticia2","Noticia3","Noticia4","Noticia5"]

function listadoNoticia(){
    let noticiaList= document.getElementById("lista") 
    for (let i = 0; i < listNoticias.length; i++) {
        let li = document.createElement("li")
        li.innerText=listNoticias[i]
        noticiaList.appendChild(li)        
    }
}

function cambiarImagen(){
    var imagen = document.getElementById("imagen")
    imagen.setAttribute('src',"./img/barsimpson.png")
}