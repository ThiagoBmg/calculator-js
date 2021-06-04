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
        console.log(a,b,x)
        if(x==='+') return this.sum(a,b)
        if(x==='-') return this.sub(a,b)
        if(x==='x') return this.mul(a,b)
        if(x==='÷') return this.div(a,b)
    }
}