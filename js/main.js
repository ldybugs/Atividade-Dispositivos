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
    list.style.color = "#FF2400";
    list.textContent = "Abaixo do peso"; }

    else if ((imc > 18.5) & (imc < 24.9)) { 
    list.style.color = "#3CB043";
    list.textContent = "Peso normal"; } 

    else if ((imc > 25.0) & (imc < 29.9)) {
    list.style.color = "#FF2400";
    list.textContent = "Excesso de peso"; }

    else if ((imc > 30.0) & (imc < 34.9)) {
    list.style.color = "D30000";
    list.textContent = "Obesidade classe I"; }

    else if ((imc > 35.0) & (imc < 39.9)) {
    list.style.color = "D30000";
    list.textContent = "Obesidade classe II"; }

    else if (imc > 40) {
    list.style.color = "#D30000";
    list.textContent = "Obesidade classe III"; }
}
