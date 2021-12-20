function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
if (hora == 1){
    msg.innerHTML = `Agora é ${hora} hora` 
}else{
    msg.innerHTML = `Agora são ${hora} horas. `
}
if (hora >= 5 && hora < 12){
    //BOM DIA!
    img.src = 'manha.png'
    document.body.style.background = '#edddc9'
    document.getElementById('titulo').style.color = '#70caf2'
    document.getElementById('footer').style.color = '#70caf2'
}else if(hora >= 12 && hora < 17){
    // BOA TARDE!
    img.src = 'tarde.png'
    document.body.style.background = '#ffdc38'
    document.getElementById('titulo').style.color = '#0f1514'
    document.getElementById('footer').style.color = '#0f1514'
}else if(hora == 17){
    //FIM DE TARDE
    img.src = 'fimdetarde.png'
    document.body.style.background = '#bf6c15'
    document.getElementById('titulo').style.color = '#133036'
    document.getElementById('footer').style.color = '#133036'
}else if(hora >= 18 && hora < 24){
    //BOA NOITE!
    img.src = 'noite.png'
    document.body.style.background = '#061822'
    document.getElementById('titulo').style.color = '#b5e0fb'
    document.getElementById('footer').style.color = '#b5e0fb'
}else {
    //BOA MADRUGADA!
    img.src = 'madrugada.png'
    document.body.style.background = '#332437'
    document.getElementById('titulo').style.color = '#a395a6'
    document.getElementById('footer').style.color = '#a395a6'
}
    

}