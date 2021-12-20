function parOuimpar(n){
    if(n % 2 == 0){
        return 'PAR'
    }else{
        return 'ÍMPAR'
    }
}
let num = Math.floor(Math.random() * 100 + 1) //Math.floor arredonda o valor. Math.randomn*100 +1 gera um número entre 1 e 101
console.log(num)
let res = parOuimpar(num)
console.log(res)
console.log('')