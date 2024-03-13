// Funcao que inverte letras
function inverter(palavra) {
  let j = "";
  for (let i = palavra.length - 1; i >= 0; i--) {
    j += palavra[i]; // concatena as letras fromando a string
  }
  return j
}

console.log(inverter("Fernanda"));

/*5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;*/