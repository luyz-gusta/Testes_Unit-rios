/************************************************************
 * OBJETIVO: Funções puras 
 * DATA: 28/09/2023
 * AUTOR: Luiz Gustavo
 * PROFESSOR: Fernando Leonid
 ************************************************************/

const soma = (n1, n2) => {
    return n1 + n2
}

const fatorial = (number) => {
    return number <= 1 ? 1 : number * fatorial(number-1)
}

// const fatorial = (number) => {
//     let fat = 1

//     for(let cont=1; cont <= number; cont++){
//         fat *= cont
//     }

//     return fat
// }

module.exports = {
    soma,
    fatorial
}