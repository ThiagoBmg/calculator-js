const result = document.querySelector('#resultado_value');

// guardando os botões para manipular nos clicks
const somar_btn  = document.querySelector('#mais div');
const subtrair_btn  = document.querySelector('#menos div');
const multiplicar_btn  = document.querySelector('#multiplicacao div');
const divisao_btn  = document.querySelector('#divisao div');
const igual_btn = document.querySelector('#igual div');

// variavel que guarda os calculos realizados e os resultados temporariamente
var TMP_LOG = []; 

// style default dos botões
const defaulStyle = divisao_btn.style;

// variavel que ira guardar as possibilidades de ações
const btn_actions = {
    // função que desativa todos os botões
    clearButton(){
        somar_btn.style = defaulStyle;
        subtrair_btn.style = defaulStyle;
        multiplicar_btn.style = defaulStyle;
        divisao_btn.style = defaulStyle;
        igual_btn.style = defaulStyle;
    },
    // função que ativa a cor do botão selecionado pelo usuário
    activeButton(x){
        this.clearButton(); // desativando os botões ativados anteriormente antes de ativar o atual

        // estilos
        let tmp_color = '#F19A38'; // cor botão ativado
        let tmp_transition = 'all .3s ease'; // cor botão ativado
        let tmp_backgroundColor = '#FFFEFF'; // cor botão ativado

        switch(x){
            case '+':
                somar_btn.style.backgroundColor =tmp_backgroundColor;
                somar_btn.style.transition = tmp_transition;
                somar_btn.style.color = tmp_color;
                break
            case '-':
                subtrair_btn.style.backgroundColor = tmp_backgroundColor;
                subtrair_btn.style.transition = tmp_transition;
                subtrair_btn.style.color = tmp_color;
                break
            case 'x':
                multiplicar_btn.style.backgroundColor = tmp_backgroundColor;
                multiplicar_btn.style.transition =tmp_transition;
                multiplicar_btn.style.color = tmp_color;
                break
            case '÷':
                divisao_btn.style.backgroundColor =tmp_backgroundColor;
                divisao_btn.style.transition = tmp_transition;
                divisao_btn.style.color = tmp_color;
                break
            case '=':
                igual_btn.style.animation = 'btnIgual .3s ease'
                break
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
        this.operation = false; // operação da conta a ser realizada
        btn_actions.clearButton();
        this.print(this.current_value); // printando um valor inicial
    }
    // função que recebe os valores da calculadora
    inputNumbers(number){
        this.print(this.current_value) // imprimimdo o valor atual
        //VALIDAÇÕES
        if(resultado_value.innerHTML.length>7) return false; // caso a quantidade dos numeros digitados seja igual a 8, retorna false
        if(!number && resultado_value.innerHTML == '0') return false; // caso o valor atual seja zero e o usuário digitar zero, retorna false
        if(resultado_value.innerHTML.lastIndexOf(',') + 1 === resultado_value.innerHTML.length && number == ',') return false // caso o ultimo digito for a virgula e o usuário digitar virgula, retorna false
        //
        else if(number == ',' && resultado_value.innerHTML == '0')  this.current_value += (number).toString(); // caso o valor atual seja igual a zero e o usuário digitar ',', retorna 0, 
        else if(number && resultado_value.innerHTML == '0')  this.current_value = (number).toString(); // caso o valor atual seja zero e o usuário digitar um valor > 0, ele substitui o valor atual pelo valor digitado
        else if(resultado_value.innerHTML !== '0')  this.current_value += (number).toString(); // caso o valor atual seja > 0 ele concatena os valores digitados
        return this.print(this.current_value) // imprimindo o valor atual depois das ações
    }
    // calcula variavel last value com a current value de acordo com a operação selecionada
    calcular(x){
        // caso o botão seja o = ele ativa o efeito de cor 
        if(x === '='){
            btn_actions.activeButton(x)
        }

        // caso os números guardados forem inválidos ele não realiza a conta
        // ou os dois termos forem iguais a zero
        if(this.last_value == 'NaN' || this.current_value == 'NaN' || !this.current_value && ! this.last_value) return false 

        var c_result = Methodos.init(this.last_value, this.current_value, this.operation);
        //console.log(this)

        if (typeof c_result == 'undefined') return false; // caso o resultado retorne um valor inválido ele não ira prosseguir com as etapas de salvar o resultado. 

        // guardando temporariamente os valores utilizados na calculadora
        TMP_LOG.push({
            last_value :this.last_value,
            current_value: this.current_value,
            operation: this.operation,
            result:c_result
        });

        this.current_value = c_result;
        this.print(this.current_value);
        this.last_value = 0;
        this.operation = false;
        this.on_operation = false;
    }
    // caso o usuário selecione um operador ao ivés de uma letra
    operator(x){
        // se condição que existe um operador esperando for positiva
        if(!this.on_operation || !x){
            this.on_operation = true; // iniciando operação
            this.operation = x;  // defininindo qual a operação
            btn_actions.activeButton(x); // ativando o estilo do botão
            this.last_value = this.current_value; // definindo o valor atual como o last para zerar e pegar o proximo valor
            this.current_value = 0; // preparando para pegar o termo 2
        }
        else if(this.on_operation){
            if(this.operation === x || !this.current_value && ! this.last_value) return false // caso a operação digitada for igual a atual, retorna false
            
            this.calcular(this.operation) // caso o botão de operação seja diferente e no minimo um dos termos forem > o, calcula os termos 
            btn_actions.clearButton() // desativando os botões
        }
    }
}
