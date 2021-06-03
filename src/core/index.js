const resultado_value = document.querySelector('#resultado_value');


class CalcCore{
    constructor(){
        this.value = [0];
    }
    
}


function digitar(x){
    if(typeof x === 'number'){
        return resultado_value.innerHTML = resultado_value.innerHTML + x
        
    }
}

