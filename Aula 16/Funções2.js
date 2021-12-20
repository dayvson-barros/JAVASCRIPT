// function soma (n1=0, n2=0)  O valor atribuido é usado quando não se coloca no valoe quando chama a função.
function soma (n1, n2){
    console.log(`n1: ${n1} ; n2: ${n2}` )
    return n1 + n2
}

console.log(soma(Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1)))