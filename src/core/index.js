const resultado_value = document.querySelector('#resultado_value');

const somar_btn  = document.querySelector('#mais div');
const subtrair_btn  = document.querySelector('#menos div');
const multiplicar_btn  = document.querySelector('#multiplicacao div');
const divisao_btn  = document.querySelector('#divisao div');

const defaulStyle = divisao_btn.style;

class Core{
    constructor(){
        this.value = [0,0,''];
        this.status = false;
        this.limpar();
    }

    limpar(){
        this.value = [0,0,''];
        resultado_value.innerHTML = 0;
    }

    prenher(x){
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

    calc(x){

        let current_value = parseInt(resultado_value.innerHTML); 

        if(!this.status){
            if( x === '+'){
                somar_btn.style.backgroundColor = '#FFFEFF';
                somar_btn.style.transition = 'all .3s ease';
                somar_btn.style.color = '#F19A38'
    
                subtrair_btn.style = defaulStyle;
                multiplicar_btn.style = defaulStyle;
                divisao_btn.style = defaulStyle;

                this.value = [current_value,0,'soma'];
                this.status = true;
            }
        }
    }
}


/* 
   acoes(x){
        this.status = true;
        if( x === '+'){
            somar_btn.style.backgroundColor = '#FFFEFF';
            somar_btn.style.transition = 'all .3s ease';
            somar_btn.style.color = '#F19A38'

            subtrair_btn.style = defaulStyle;
            multiplicar_btn.style = defaulStyle;
            divisao_btn.style = defaulStyle;
        }
        else if(x==='-'){
            subtrair_btn.style.backgroundColor = '#FFFEFF';
            subtrair_btn.style.transition = 'all .3s ease';
            subtrair_btn.style.color = '#F19A38'

            somar_btn.style = defaulStyle;
            multiplicar_btn.style = defaulStyle;
            divisao_btn.style = defaulStyle;
        }
        else if(x==='x'){
            multiplicar_btn.style.backgroundColor = '#FFFEFF';
            multiplicar_btn.style.transition = 'all .3s ease';
            multiplicar_btn.style.color = '#F19A38'

            somar_btn.style = defaulStyle;
            subtrair_btn.style = defaulStyle;
            divisao_btn.style = defaulStyle;
        }
        else if( x==='÷'){
            divisao_btn.style.backgroundColor = '#FFFEFF';
            divisao_btn.style.transition = 'all .3s ease';
            divisao_btn.style.color = '#F19A38'

            somar_btn.style = defaulStyle;
            subtrair_btn.style = defaulStyle;
            multiplicar_btn.style = defaulStyle;
        }

        else if(x === '=' ){
            console.log(this.value)
        }

        else if(x === 'clear' ){
            this.limpar();
        }
    } */