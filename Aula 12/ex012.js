var idade = Math.floor(Math.random() * 100)
console.log(`Idade: ${idade} anos`)
if(idade < 16){
    console.log('Não pode votar')
}else if(idade < 18 || idade > 65){
        console.log('Voto opcional')
}else{
    console.log('Voto obrigatório')
}