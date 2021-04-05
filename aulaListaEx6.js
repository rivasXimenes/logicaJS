/* 
Supondo que A, B e C são variáveis do tipo inteiro, 
com valores iguais a 5, 10 e -8, respectivamente e uma 
variável D com valor 1.5, quais os resultados das expressões 
aritméticas apresentadas em seguida? 
*/

let a = 5 
let b = 10
let c = -8
let d = 1.5

// rad(pot(a,b/a)) + c * d
resultado = Math.sqrt(Math.pow(a,b/a)) + c * d
console.log(resultado)