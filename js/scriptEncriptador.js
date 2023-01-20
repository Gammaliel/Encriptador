const textoIngresado = document.querySelector("#InputTexto");
const textoResultado = document.querySelector("#TextoEncriptado");


function encriptar (){
  let texto = textoIngresado.value.toLowerCase();
  let textoEncriptado = texto
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("o", "ober")
  .replaceAll("a", "ai")
  .replaceAll("u", "ufat");

  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("textMuñeco").style.display = "none";

  textoResultado.value = textoEncriptado;

  

}

function desencriptar (){
  let texto = textoIngresado.value.toLowerCase();
  let textoEncriptado = texto
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ai", "a")
  .replaceAll("ufat", "u");

  

  textoResultado.value = textoEncriptado;

  
}

function copiar(){
  let contenido = document.querySelector("#textoEncriptado");
  contenido.select();
  document.execCommand("copy");
}