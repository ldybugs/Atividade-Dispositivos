window.onload = () => {
  "use strict";
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
};

function calculo() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const sexo = document.getElementById("sexo").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  const imc = peso / (altura * altura);

  nomeresult.textContent = nome;
  idaderesult.textContent = idade + " anos";
  sexoresult.textContent = sexo;
  alturaresult.textContent = altura + "m";
  pesoresult.textContent = peso + "kg";
  results.textContent = Math.floor(imc);

  if (imc < 18.5) {
    listado.style.color = "#FF3636";
    listado.textContent = "Abaixo do peso";
  } else if ((imc > 18.5) & (imc < 24.9)) {
    listado.style.color = "#47AA25";

    listado.textContent = "Peso normal";
  } else if ((imc > 25.0) & (imc < 29.9)) {
    listado.style.color = "#efff11";
    listado.textContent = "Excesso de peso";
  } else if ((imc > 30.0) & (imc < 34.9)) {
    listado.style.color = "#FF3636";
    listado.textContent = "Obsidade classe I";
  } else if ((imc > 35.0) & (imc < 39.9)) {
    listado.style.color = "#FF3636";
    listado.textContent = "Obsidade classe II";
  } else if (imc > 40) {
    listado.style.color = "#FF3636";
    listado.textContent = "Obsidade classe III";
  }
}
