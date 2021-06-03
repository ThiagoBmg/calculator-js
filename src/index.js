const calculadora = new Core();

function digitar(x){
    if(typeof x === 'number' || x === ','){
        calculadora.prenher(x)
    }
    else{
        calculadora.calc(x)
    }
}

