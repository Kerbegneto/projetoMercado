//Bibliotecas
//apontamento para o arquivo de desenvolvimento que vamos testar
const calculadora = require("../../src/calculadora");

// Apontamento para o arquivo de massa de teste
const arquivoJson = require("../../vendors/csv/massaDivisao");

// Funções de testes de Unidade
test("Somar 5 + 7", () => {
    //1. Configura
    //1.1 Dados de Entrada
    const num1 = 5;
    const num2 = 7;
    // 1.2 Resultado Esperado
    const resultadoEsperado = 12;

    //Executa
    const resultadoAtual = calculadora.somarDoisNumeros(num1, num2);


    //Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})

test("Subtrair 15 - 7", () => {
    // 1 - Configurar / Arrange
    // Entradas
    const num1 = 15;
    const num2 = 7;
    // Saidas
    const resultadoEsperado = 8;

    // 2 - Executa / Act

    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros;
    const resultadoAtual = subtrairDoisNumeros(num1, num2);
   
    // 3 - Valida / Assert
    
    expect(resultadoAtual).toBe(resultadoEsperado);

})

test("Multiplicar 10 * 5", () => {

    // 1- Configurar
    // Entradas
    const num1 = 10;
    const num2 = 5;
    //Saidas
    const resultadoEsperado = 50;

    // 2 - Executar
    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;
    const resultadoAtual = multiplicarDoisNumeros(num1, num2);

    // 3 - validar

    expect(resultadoAtual).toBe(resultadoEsperado);
})

test ("Dividir 40 / 2",() => {

    // 1 - Configurar
    // Entradas
    const num1 = 40;
    const num2 = 2;

    //Saídas
    const resultadoEsperado = 20;

    // Executar
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    const resultadoAtual = dividirDoisNumeros(num1, num2);
    // Validar 

    expect(resultadoAtual).toBe(resultadoEsperado);
})

//HP ALM Data Driven Test
let massaDivisao =[
    [10, 5, 2],
    [15, 3, 5],
    [8, 4, 2],
    [7, 0, Infinity]
];

test.each(massaDivisao)("Dividir %f / %f", (num1, num2, resultadoEsperado) =>{
    
    // 1 - Configurar
    // Dados de Entrada e resultado Esperado são providos pela lista massaDivisao

    // Executar
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    const resultadoAtual = dividirDoisNumeros(num1, num2);
    // Validar 

    expect(resultadoAtual).toBe(resultadoEsperado);
})

test.each(arquivoJson.array.map(elemento => [
    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado
]))

("DDT: Dividir %f / %f", (num1, num2, resultadoEsperado) => {
    // configura

    //Executa
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    const resultadoAtual =dividirDoisNumeros(num1, num2);

    //Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})