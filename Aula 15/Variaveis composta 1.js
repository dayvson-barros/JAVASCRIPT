let a = [6, 4, 0 ,2, 8, 4]
console.log(a)
console.log(`A array possui ${a.length} valores` ) //Na ordem da array
console.log(a.sort()) //Colocando a array em ordem
a.push(10) //Adiciona um valor na última posição
console.log(a)
console.log(a[2]) //Entre [] para adicionar o valor especifico, começando do zero [0]
console.log(a.indexOf(8))  //.idexOf é para achar o valor dentro da array
console.log(a.indexOf(1))  //Retorna -1 pq não existe 1 na array
if(a.indexOf(1) == -1){
    console.log(`O valor 1 não existe na array`)
}
a[2] = 9           //adiciona(troquei) um valor para o terceiro valor
console.log(`Agora, a array possui ${a.length} valores`)
console.log(a)

for (const adc of a) {
    console.log(adc)
}

for (let c = 0; c < a.length; c++) {
    const element = a[c];
    console.log(`A posição ${c} tem valor: ${element}`)   
}

for (const key in a) {
    console.log(`A posição ${key} tem o valor: ${a[key]}`)

}