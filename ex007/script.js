function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os Dados e tente novamente!')
    }else{
      var fsex = document.getElementsByName('isexo')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
        genero = 'Masculino'
        if(idade >= 0 && idade < 10){
            //Child
            img.setAttribute('src' , 'foto-bebe-m.png')
        }
        else if (idade < 21){
            //Jovem
            img.setAttribute('src' , 'foto-bebe-m.png')
        }

        else if(idade < 50){
            //Adulto
            img.setAttribute('src' , 'foto-bebe-m.png')
        }

        else{
            //Idoso
            img.setAttribute('src' , 'foto-bebe-m.png')
        }


      }else if (fsex[1].checked) {
        genero = 'Feminino'
        if(idade >= 0 && idade < 10){
            //Child
            img.setAttribute('src' , 'manha-semback.png')
        }
        else if (idade < 21){
            //Jovem
            img.setAttribute('src' , 'manha-semback.png')
        }

        else if(idade < 50){
            //Adulto
            img.setAttribute('src' , 'foto-bebe-m.png')
        }

        else{
            //Idoso
            img.setAttribute('src' , 'foto-bebe-m.png')
        }

      }
      res.style.textAlign = 'center'
      res.innerHTML = `Gênero ${genero} idade ${idade} anos`
      res.appendChild(img)
    }
}