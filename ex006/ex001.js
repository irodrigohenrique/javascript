var idade = 27
console.log(`Você tem ${idade} anos`)
if (idade < 18){
        console.log('Não vota')
}   else if (idade < 18 || idade > 65){
        console.log('Opcional')
}   else if(idade >= 18){
        console.log ('Voto Obrigatório')
}
