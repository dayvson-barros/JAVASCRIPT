function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
        genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'meninokid.png')
                document.body.style.background = '#348efa'
                document.getElementById('header').style.color = '#cadf9c'
                document.getElementById('footer').style.color = '#cadf9c'
            }else if(idade < 18){
                //JOVEM
                img.setAttribute('src', 'jovemhomem.png')
                document.body.style.background = '#0024ff'
                document.getElementById('header').style.color = '#fae20a'
                document.getElementById('footer').style.color = '#fae20a'
            }else if(idade < 30){
                //MAIOR QUE 18
                img.setAttribute('src', 'homem18.png')
                document.body.style.background = '#201775'
                document.getElementById('header').style.color = '#acaa9c'
                document.getElementById('footer').style.color = '#acaa9c'
            }else if(idade < 55){
                //MADURO
                img.setAttribute('src', 'adultohomem.png')
                document.body.style.background = '#211717'
                document.getElementById('header').style.color = '#2d4d61'
                document.getElementById('footer').style.color = '#2d4d61'
            }else{
                //IDOSO
                img.setAttribute('src', 'idosohomem.png')
                document.body.style.background = '#b8b8bc'
                document.getElementById('header').style.color = '#ff0006'
                document.getElementById('footer').style.color = '#ff0006'
            }
        }else if(fsex[1].checked){
        genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'meninakid.png')
                document.body.style.background = '#e2aad0'
                document.getElementById('header').style.color = '#5139ad'
                document.getElementById('footer').style.color = '#5139ad'
            } else if (idade < 18) {
                //JOVEM
                img.setAttribute('src', 'jovemmulher.png')
                document.body.style.background = '#fce318'
                document.getElementById('header').style.color = '#444549'
                document.getElementById('footer').style.color = '#444549'
            } else if (idade < 30) {
                //MAIOR QUE 18
                img.setAttribute('src', 'mulher18.png')
                document.body.style.background = '#ffa800'
                document.getElementById('header').style.color = '#01253d'
                document.getElementById('footer').style.color = '#01253d'
            } else if (idade < 55) {
                //MADURO
                img.setAttribute('src', 'adultomulher.png')
                document.body.style.background = '#a87c55'
                document.getElementById('header').style.color = '#060606'
                document.getElementById('footer').style.color = '#060606'
            } else {
                //IDOSO
                img.setAttribute('src', 'idosamulher.png')
                document.body.style.background = '#e0e0e0'
                document.getElementById('header').style.color = '#f88c36'
                document.getElementById('footer').style.color = '#f88c36'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com idade de ${idade} anos</p>`
        res.appendChild(img)
    }
}
