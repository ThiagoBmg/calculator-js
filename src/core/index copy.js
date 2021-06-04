const resultado_value = document.querySelector('#resultado_value');

const somar_btn  = document.querySelector('#mais div');
const subtrair_btn  = document.querySelector('#menos div');
const multiplicar_btn  = document.querySelector('#multiplicacao div');
const divisao_btn  = document.querySelector('#divisao div');

const defaulStyle = divisao_btn.style;

const Methodos = {
    sum(a,b){
        return a+b
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
class Core{
    constructor(){
        this.value = [0,'operation',0];
        this.status = false;
        this.limpar();
    }

    limpar(){
        this.value = [0,false,0];
        resultado_value.innerHTML = 0;
        subtrair_btn.style = defaulStyle;
        multiplicar_btn.style = defaulStyle;
        divisao_btn.style = defaulStyle;
        somar_btn.style = defaulStyle;
        this.status = false;
    }
 
    handler(bt){
        if(this.status) return false;
        this.status = true;
        this.activeButton(bt);

        try {
            let current_value = parseInt(resultado_value.innerHTML); // guardando o valor atual do display
            // caso os valores estejão vazios
            // retorna que o primeiro termo é o atual e também já define a operação a ser executada
            if(!this.value[1] && !this.value[0]) {
                this.value[0] = current_value;  
                this.value[1] = bt;
            }
            // caso o primeiro termo esteja preenchido e o segundo termo vazio
            // retorna que o segundo termo é igual ao valor do display atual    
            else if(this.value[0] && this.value[1] && !this.value[2]) {
                this.value[2] = current_value;
                this.value[1] = bt;
            }
        }
        catch (error) {
            
        }
        finally{
            //// caso o primeiro e o segundo termo estejam preenchidos 
            //// valida se a operação é valida, caso seja
            //// retorna no display a operação realizada
            if(this.value[0]>0 && !this.value[1] && !this.value[2]){
                alert(1)
            }
            else if(this.value[1] && bt === '='){
                resultado_value.innerHTML =  Methodos.init(this.value[0],this.value[2],this.value[1]);
                this.value = [parseInt(resultado_value.innerHTML), false, 0];
            }
            else if(this.value[0]>0 && this.value[2]>0 && this.value[1] != false){
                console.log(calculadora.value)
                resultado_value.innerHTML =  Methodos.init(this.value[0],this.value[2],this.value[1]);
                this.value = [parseInt(resultado_value.innerHTML), false, 0];
            }
        }

        //if(x>0 && w>0){
        //    this.value[0] = Methodos.init(x,t_value, bt);
        //    return resultado_value.innerHTML = this.value[0];
        //}
    } 

    prenher(x){
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
    }
}

