let numeroPorAdivinar = 0;
let minimo = 1;
let maximo = 100;

function asignarTextoElemento(elemento, texto) {
  let elementohtml = document.querySelector(elemento);
  elementohtml.innerHTML = texto;
}

function empezar() {
  minimo = 1; // Reiniciar el límite mínimo
  maximo = 100; // Reiniciar el límite máximo
  document.getElementById("botonOk").style.visibility = "hidden";
  document.getElementById("botonAcertaste").style.visibility = "visible";
  document.getElementById("botonMenor").style.visibility = "visible";
  document.getElementById("botonMayor").style.visibility = "visible";
  generarNuevoNumero();
}

function generarNuevoNumero() {
  numeroPorAdivinar = Math.floor(Math.random() * 100 + 1);
  asignarTextoElemento(
    "h2#numeroNuevo",
    `El número que estás pensando es ${numeroPorAdivinar}`
  );
}

function elNumeroEsMenor() {
  maximo = numeroPorAdivinar - 1;
  if (minimo <= maximo) {
    numeroPorAdivinar =
      Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    asignarTextoElemento("h2", `Tu número es menor que ${numeroPorAdivinar}.`);
  }
}

function elNumeroEsMayor() {
  minimo = numeroPorAdivinar + 1;
  if (minimo <= maximo) {
    numeroPorAdivinar =
      Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    asignarTextoElemento("h2", `Tu número es mayor que ${numeroPorAdivinar}.`);
  }
}

function acertaste() {
  asignarTextoElemento(
    "h2",
    `¡Has adivinado el número es ${numeroPorAdivinar}!`
  );
  document.getElementById("botonOk").style.visibility = "visible";
  document.getElementById("botonAcertaste").style.visibility = "hidden";
  document.getElementById("botonMayor").style.visibility = "hidden";
  document.getElementById("botonMenor").style.visibility = "hidden";
}
