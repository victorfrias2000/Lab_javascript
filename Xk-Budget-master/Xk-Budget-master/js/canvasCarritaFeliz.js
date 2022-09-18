//declaracion de las variables
var canvas = document.getElementById("lienzo");
var contexto = canvas.getContext("2d");

var centro = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

var despX = 0;
var despY = 0;

function moverOjos() {
  despX = Math.random(Math.random() * 5) - 3;
  despY = Math.random(Math.random() * 5) - 3;
  dibujar();
}

//declaracion de metodos o funciones.
function dibujar() {
  contexto.clearRect(0, 0, canvas.width, canvas.height);
  contexto.beginPath();
  contexto.arc(centro.x, centro.y, 50, 0, 2 * Math.PI, false);
  contexto.fillStyle = "yellow";
  contexto.fill();
  contexto.lineWidth = 3;
  contexto.strokeStyle = "black";
  contexto.stroke();

  contexto.beginPath();
  contexto.arc(
    centro.x - 15 - despX,
    centro.y - 15 - despX,
    8,
    0,
    2 * Math.PI,
    false
  );

  contexto.arc(
    centro.x + 15 + despY,
    centro.y - 15 + despY,
    8,
    0,
    2 * Math.PI,
    false
  );
  contexto.fillStyle = "black";
  contexto.fill();

  contexto.beginPath();
  contexto.arc(centro.x, centro.y, 30, 0, Math.PI, false);
  contexto.stroke();
}

canvas.addEventListener("mousemove", function (evento) {
  centro = {
    x: evento.x,
    y: evento.y,
  };
});

setInterval(moverOjos, 200);
