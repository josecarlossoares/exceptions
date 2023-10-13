const readline = require('readline-sync')

try{
    let ano = readline.question('Informe seu ano de nascimento e diremos qual sua idade. ')
    let idade = 2023 - ano
    
    if(ano < 1950 || ano > 2022){
        throw new Error('O ano informa não é um valor válido!')
    }else{
        console.log(`Sua idade é ${idade}`)
    }
}catch(error){
    console.log(error)
}finally{
    console.log('Obg pela preferencia!')
}