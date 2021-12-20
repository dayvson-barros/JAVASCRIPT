var num = document.getElementById('txtv')
var res = document.getElementById('res')
var lista = document.getElementById('select')
var valores = []


function espaco(){
    let esp = document.createElement('p')
    res.appendChild(esp)
    return esp
}

function isNumero(nu) {

    if (Number(nu) >= 1 && Number(nu) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(nu, lis){
   if(lis.indexOf(Number(nu)) != -1){
       return true
   }else{
       return false
   }
}

function adicionar(){   
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement ('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        item.value = '${option}'
        lista.appendChild(item)
        res.innerHTML =''
    }else{
        window.alert('[ERRO] Valor inválido ou já encontrado na lista')
        
    }
    num.value = ''
    num.focus()
}

function somar(){
    let sum = 0
    let max = 0
    let min = 100
    let tamanho = valores.length
    if(tamanho == 0){
        window.alert('Adicione valores antes de somar')
    }else{
    for (let i = 0; i < tamanho; i++) {
        sum += valores[i]
        max = max > valores[i] ? max : valores[i]
        min = min < valores[i] ? min : valores[i]
        }
    let med = sum / valores.length
    espaco()
    if(valores.length <= 1){
        res.innerHTML += `Ao todo, temos ${tamanho} número digitado.`
    }else{
        res.innerHTML += `Ao todo, temos ${tamanho} números digitados`
    }
    espaco()
    res.innerHTML += `O maior número digitado foi ${max}.`
    espaco()
    res.innerHTML += `O menor número digitado foi ${min}.`
    espaco()
    res.innerHTML += `O valor da soma de todos os números é ${sum}.`
    espaco()
    res.innerHTML += `A média dos valores digitados é ${med}.`
    }
}

function limpar(){
    
    var length = lista.options.length;
    for (i = length - 1; i >= 0; i--) {
        let n = valores.pop()
        lista.options[i] = null;
    }
    res.innerHTML = ''
        
    }

          
