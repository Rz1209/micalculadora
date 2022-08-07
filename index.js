const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const calculadora = new Calculadora();

console.log(calculadora.sumar(2,3))
console.log(calculadora.restar(10,4))
console.log(calculadora.dividir(100,3))
console.log(calculadora.multiplicar(10,4))