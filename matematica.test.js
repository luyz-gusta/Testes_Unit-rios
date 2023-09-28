/************************************************************
 * OBJETIVO: Testes unitários
 * DATA: 28/09/2023
 * AUTOR: Luiz Gustavo
 * PROFESSOR: Fernando Leonid
 ************************************************************/

const {soma, fatorial} = require('./matematica.js')

describe('Calculos básicos', () => {

    test('Soma de 1 + 1 deve ser 2', () => {
        expect(soma(1,1)).toBe(2)
    })
    
    test('Soma de 1 + 2 deve ser 2', () => {
        expect(soma(1,2)).toBe(3)
    })

})

describe('Calculos avançado', () => {
    
    test('Fatorial de 1 deve ser 1', () => {
        expect(fatorial(1)).toBe(1)
    })
    
    test('Fatorial de 5 deve ser 120', () => {
        expect(fatorial(5)).toBe(120)
    })
    
    test('Fatorial de 7 deve ser 5040', () => {
        expect(fatorial(7)).toBe(5040)
    })
    
})
