const calculadora = new Calculator();

function digitar(x){
    if(x === 'clear') calculadora.reset();
    if(typeof x === 'number' || x === ',')  calculadora.inputNumbers(x); 
    if( x === '+' || x === '-' || x === 'x' || x === '÷')  calculadora.operator(x); /* if(!calculadora.on_operation) */
    if( x === '=') calculadora.calcular(x); /* if(!calculadora.on_operation)  */
}