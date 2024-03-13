//calcula a sequencia de Fibonacci
function fibo(num) {
  var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
      for (var i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
      }
        return fibonacci;
}

//funcao para checar se o numero pertence a sequencia
function checarFibo(num) {
  var f = fibo(num);
 //   console.log(f);       imprimir o array com os numeros para conferencia
    const findNum = f.find(element => element == num);
    if (findNum == num) {
      console.log(`O número ${num} pertence a sequência de Fibonacci.`);
    } else {
      console.log(`O número ${num} não pertence a sequência de Fibonacci.`);
    }
}

checarFibo(36)
checarFibo(34)
checarFibo(28657)
checarFibo(1000)



/*Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/