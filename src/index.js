const calculadora = new Calculadora();
console.log(calculadora.value)
function digitar(x){

    if(typeof x === 'number' || x === ','){
        calculadora.Dwrite(x);
    }
    else if(x === 'clear'){
        calculadora.limpar();
    }
    else if(x === '='){
        calculadora.calculate(x);
    }
    else{
        calculadora.handler(x);
    }
}

