var inicio = window.document.getElementById('txti')
var fim = window.document.getElementById('txtf')
var passo = window.document.getElementById('txtp')
var res = window.document.getElementById('res')



function contar(){
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar'
        //Campos vazios

    }else{ 

        if(passo.value == 0){
            window.alert('Passo 0 não funciona, foi adicionado o passo 1')
            p = 1
            //Campo passo vazio ou igual a zero
        }

        res.innerHTML = 'Contando: <br/>'

        if(i < f){ //Contagem crescente
            document.body.style.background = 'red'
            for (let index = i; index <= f; index += p) {
                res.innerHTML += `${index} ✍ `
                }
               
        
        }else{ //Contagem decrescente
                document.body.style.background = 'blue'
                for (let index = i; index >= f; index -= p) {
                    res.innerHTML += `${index} ✍ `    
            }   
        } 
        res.innerHTML += ' 🏁'
    }           

}
