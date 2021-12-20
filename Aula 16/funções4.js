function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
        console.log(`${c} *`)
    }
    return fat
}
console.log(fatorial(Math.floor(Math.random() * 10 + 1)))
// ex: 5! = 5x4x3x2x1 = 120