
//var hora = Math.floor(Math.random() * 24) Pega um valor aleatório até 24
var agora = new Date()
var hora = agora.getHours()
var dia = agora.getDay()
console.log(`São exatemente ${hora} horas`)

if (dia < 10){
    console.log('Dia de compras')
}else if (dia > 10 && dia < 20){
    console.log('Dia de pagar as contas')
} else {
    console.log('Está próximo do fim do mês')
}
if(hora >= 5 && hora < 12){
    console.log('Bom dia!')
} else if(hora >= 12 && hora < 18){
    console.log('Boa tarde!')
} else if (hora >= 18 && hora < 24){
    console.log('Boa noite!')
}else{
    console.log('Boa madrugada')
}