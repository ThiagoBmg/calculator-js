const resultado_value = document.querySelector('#resultado_value');

const somar_btn  = document.querySelector('#mais div');
const subtrair_btn  = document.querySelector('#menos div');
const multiplicar_btn  = document.querySelector('#multiplicacao div');
const divisao_btn  = document.querySelector('#divisao div');
const defaulStyle = divisao_btn.style;
class Calculadora{
    constructor(){
        this.value = ['1term','ops'];
        this.status = false;
        this.limpar();
    }

    limpar(){
        this.value = ['1term','ops'];
        resultado_value.innerHTML = 0;
        subtrair_btn.style = defaulStyle;
        multiplicar_btn.style = defaulStyle;
        divisao_btn.style = defaulStyle;
        somar_btn.style = defaulStyle;
        this.status = false;
    }
 
    handler(operacao){
        //this.status = true;
        //this.activeButton(operacao);
        let current_value = parseInt(resultado_value.innerHTML);

        if(this.value[0]==='1term') {
            this.value[0] = current_value
            this.value[1] = operacao
        }

        //else if(this.value[0]!='1term' && this.value[1] !='ops'){
        //    return resultado_value.innerHTML = Methodos.init(this.value[0],current_value,this.value[1]);
        //}
        console.log(this.value)
    }


    calculate(){
        let current_value = parseInt(resultado_value.innerHTML);
        if(this.value[0] != '1term') return resultado_value.innerHTML =  Methodos.init(this.value[0],current_value,this.value[1]);
    }

    // função que ativa a cor do botão selecionado pelo usuário
    activeButton(x){
        if( x === '+'){
          somar_btn.style.backgroundColor = '#FFFEFF';
          somar_btn.style.transition = 'all .3s ease';
          somar_btn.style.color = '#F19A38'
          subtrair_btn.style = defaulStyle;
          multiplicar_btn.style = defaulStyle;
          divisao_btn.style = defaulStyle;
        }
        else if(x === '-'){
          subtrair_btn.style.backgroundColor = '#FFFEFF';
          subtrair_btn.style.transition = 'all .3s ease';
          subtrair_btn.style.color = '#F19A38'
          somar_btn.style = defaulStyle;
          multiplicar_btn.style = defaulStyle;
          divisao_btn.style = defaulStyle;
        }
        else if(x === 'x'){
          multiplicar_btn.style.backgroundColor = '#FFFEFF';
          multiplicar_btn.style.transition = 'all .3s ease';
          multiplicar_btn.style.color = '#F19A38'
          somar_btn.style = defaulStyle;
          subtrair_btn.style = defaulStyle;
          divisao_btn.style = defaulStyle;
        }
        else if( x=== '÷'){
           divisao_btn.style.backgroundColor = '#FFFEFF';
           divisao_btn.style.transition = 'all .3s ease';
           divisao_btn.style.color = '#F19A38'
           somar_btn.style = defaulStyle;
           subtrair_btn.style = defaulStyle;
           multiplicar_btn.style = defaulStyle;
        }
        else{
            somar_btn.style = defaulStyle;
            subtrair_btn.style = defaulStyle;
            multiplicar_btn.style = defaulStyle;
            divisao_btn.style = defaulStyle;
        }
    }

    Dwrite(x){
        subtrair_btn.style = defaulStyle;
        multiplicar_btn.style = defaulStyle;
        divisao_btn.style = defaulStyle;
        somar_btn.style = defaulStyle;

        if(this.status){
            resultado_value.innerHTML = x
            this.status = false
        }
        else{
            if(!x && resultado_value.innerHTML == '0') return false
            else if(x == ',' && resultado_value.innerHTML == '0') return resultado_value.innerHTML += x
            else if(x && resultado_value.innerHTML == '0') return resultado_value.innerHTML = x
            else if(resultado_value.innerHTML !== '0') return resultado_value.innerHTML += x
        }
    }

}

