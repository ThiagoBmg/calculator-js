const result = document.querySelector('#resultado_value');

// guardando os botões para manipular nos clicks
const somar_btn  = document.querySelector('#mais div');
const subtrair_btn  = document.querySelector('#menos div');
const multiplicar_btn  = document.querySelector('#multiplicacao div');
const divisao_btn  = document.querySelector('#divisao div');
const igual_btn = document.querySelector('#igual div');

// style default dos botões
const defaulStyle = divisao_btn.style;
// variavel que ira guardar as possibilidades de ações
const btn_actions = {
     // função que ativa a cor do botão selecionado pelo usuário
    clearButton(){
        somar_btn.style = defaulStyle;
        subtrair_btn.style = defaulStyle;
        multiplicar_btn.style = defaulStyle;
        divisao_btn.style = defaulStyle;
        igual_btn.style = defaulStyle;
    },
     activeButton(x){
        this.clearButton();
        if( x === '+'){
          somar_btn.style.backgroundColor = '#FFFEFF';
          somar_btn.style.transition = 'all .3s ease';
          somar_btn.style.color = '#F19A38'
        }
        else if(x === '-'){
          subtrair_btn.style.backgroundColor = '#FFFEFF';
          subtrair_btn.style.transition = 'all .3s ease';
          subtrair_btn.style.color = '#F19A38'
        }
        else if(x === 'x'){
          multiplicar_btn.style.backgroundColor = '#FFFEFF';
          multiplicar_btn.style.transition = 'all .3s ease';
          multiplicar_btn.style.color = '#F19A38'
        }
        else if( x=== '÷'){
           divisao_btn.style.backgroundColor = '#FFFEFF';
           divisao_btn.style.transition = 'all .3s ease';
           divisao_btn.style.color = '#F19A38'
        }
        else if( x=== '='){
            igual_btn.style.animation = 'btnIgual .3s ease'
        }
    }
}

// variavel que guarda as opções de operações matematicas
const Methodos = {
    sum(a,b){
        return (parseFloat(a)+parseFloat(b)).toString()
    },
    mul(a,b){
        return a*b
    },
    div(a,b){
        return a/b
    },
    sub(a,b){
        return a-b
    },
    init(a,b,x){
        if(x==='+') return this.sum(a,b)
        if(x==='-') return this.sub(a,b)
        if(x==='x') return this.mul(a,b)
        if(x==='÷') return this.div(a,b)
    }
}

class Calculator{
    constructor(){
        this.reset()
    }
    // printa as ações no display
    print(x){
        result.innerHTML = x;
        //console.log(x);
    }
    // redefine os valores da calculadora
    reset(){
        this.last_value = 0 // armazena o termo 1
        this.current_value = 0; // valor atual (inicia como 0)
        this.on_operation = false; // variavel que é acionada quando uma operação é solicitada
        this.operation = false; // operação da conta
        this.print(this.current_value); // printando um valor inicial
    }
    // função que recebe os valores da calculadora
    inputNumbers(number){
        this.print(this.current_value)
        if(resultado_value.innerHTML.length>7) return false;
        if(!number && resultado_value.innerHTML == '0') return false;
        if(resultado_value.innerHTML.lastIndexOf(',') + 1 === resultado_value.innerHTML.length && number == ',') return false
        else if(number == ',' && resultado_value.innerHTML == '0')  this.current_value += (number).toString();
        else if(number && resultado_value.innerHTML == '0')  this.current_value = (number).toString();
        else if(resultado_value.innerHTML !== '0')  this.current_value += (number).toString();
        return this.print(this.current_value)
    }
    // calcula variavel last value com a current value de acordo com a operação selecionada
    calcular(x){
        if(x === '='){
            btn_actions.activeButton(x)
        }
        //console.log( this.on_operation ,this.operation )
        this.current_value = Methodos.init(this.last_value, this.current_value, this.operation);
        this.print(this.current_value);
        this.last_value = 0;
        this.operation = false;
        this.on_operation = false;
    }
    // caso o usuário selecione um operador ao ivés de uma letra
    operator(x){
        // se condição que existe um operador esperando for positiva
        if(!this.on_operation){
            this.on_operation = true; // iniciando operação
            this.operation = x;  // defininindo qual a operação
            btn_actions.activeButton(x); // ativando o estilo do botão
            this.last_value = this.current_value; // definindo o valor atual como o last para zerar e pegar o proximo valor
            this.current_value = 0; // preparando para pegar o termo 2
        }
        else if(this.on_operation){
            this.calcular(this.operation)
            btn_actions.clearButton()
        }
        //if(this.operation === '='){
        //    console.log(x)
        //}
    }
}
