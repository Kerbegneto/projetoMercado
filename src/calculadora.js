// Importação / Referência a Bibliotecas

// classe (opcional)

// Funções ou Métodos

// var: variável
// let: variável aperfeiçoada
// const: constante

// Notações:
// camelCase
// snake_Case

                                                //5    7
let somarDoisNumeros = function somarDoisNumeros(num1, num2) {
                    // 5    +  7
    
    const resultado =num1 + num2;
             // 12
    return resultado;
}

let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2){
    const resultado = num1 - num2;
    return resultado;
}

const multiplicarDoisNumeros = (num1, num2) => {
    return  num1 * num2;
}

const dividirDoisNumeros = (num1, num2) => num1 / num2;

module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
};