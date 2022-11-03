
function gerar(){
    var num = document.getElementById('inum')
    var res = document.getElementById('res')
    if(num.value.length == 0){
        alert('Insira um valor!')
    }else{
        var v = Number(num.value)
        var c= 1
        res.innerHTML = ''
        while(c<=10){
            var item = document.createElement('option')
            item.text = `${v} x ${c} = ${v*c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
    }
}
