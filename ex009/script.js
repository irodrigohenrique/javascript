function contar(){
    var inicio = document.getElementById('iinicio')
    var ifim = document.getElementById('ifim')
    var ipasso = document.getElementById('ipasso')
    var res = document.getElementById('res')
    
    if(inicio.value.length == 0 || ifim.value.length == 0 || ipasso.value.length == 0){
        window.alert('Insira um número')
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(ifim.value)
        var p = Number(ipasso.value)
        if (p <= 0 ){
            alert('Passo Invalido!')
            p=1
        }
        if(i < f){
            for(c=i; c <= f; c = c+=p){
            res.innerHTML += `${c} \u{1F449}`
        }
        }else{
            for(c = i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
