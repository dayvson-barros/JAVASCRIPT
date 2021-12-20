var numero = document.getElementById('txtn')
var tab = document.getElementById('seltab')

function tabuada(){
    if(numero.value.length == 0){
        window.alert('Adicione um número para continuar')
    }else{
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            item.value = 'tab${c}'
            tab.appendChild(item)
            c++
        }
        
    }   
}