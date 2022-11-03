function carregar(){
    var data = new Date()
    var atual = data.getHours()
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    msg.innerHTML = `São ${atual} horas.`
    if (atual >= 0 && atual < 12){
        //bom dia
        img.src = 'imagens/manha-semback.png'
        document.body.style.backgroundColor = 'yellow'
    } else if(atual >= 12 && atual < 18){
        //boa tarde
        img.src = 'imagens/tarde-2semback.png'
        document.body.style.backgroundColor = 'orange'
    }else{
        //boa noite
        img.src = 'imagens/noite-semback.png'
        document.body.style.backgroundColor = 'brown'
    }


}