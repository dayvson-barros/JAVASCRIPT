//RECURSIVIDADE
function fatorial(n) {
    if(n == 1){ 
    return 1
    }else{
        console.log(n)
        return n * fatorial(n-1)    
    }
}

console.log(fatorial(Math.floor(Math.random() * 20 + 1)))

/* ex: 5! = 5x4x3x2x1 = 120
 5! = 5 * 4!

 n! = n * (n-1)
 1! = 1
*/