/* Exercício proposto:
0 - Obter um usario
1 - Obter numero de telefone do usuario a partir de seu Id
2 - Obter o endereço do usuario pelo Id
*/

function obterUsuario(callback) {  //simular que uma aplicação tá rodando em background- s foi pra um site, banco de dados, etc. //callback para executar na ordem correta
    setTimeout(function() {      // vai executar uma função e quando chegar no ponto "x" vai esperar para retornar o valor
        return callback(null,{  //primeiro parâmetro do callback é sempre nulo (entender melhor o pq)
            id: 1,
            nome: "Annie",
            dataNascimento: new Date()  // new date para criar datas
        })
    }, 1000) //depois de 1 seg retorna para funcao            
}


function obterTelefone(idUsuario , callback){
    setTimeout(() => {
        return callback (null, {
            telefone: "254695",
            ddd: 11
        })
    },2000);  //simulando que a infor vem de outra base de dados
}

function obterEndereco(idUsuario , callback){
    setTimeout(() => {
        return callback (null, {
            endereco: "rua dos bobos",
            numero: 0,
        })
    },2000);
}

obterUsuario(function resolverUsuario(error, usuario){
    //no Js -> null || "" || 0  é === false
    if (error) {
        console.error ("DEU RUIM NO USUÁRIO", error)
        return;
    }
    obterTelefone(usuario.id, function resolverUsuario(error1, telefone){
        if (error1) {
            console.error ("DEU RUIM NO TELEFONE", error)
            return;
        }

        obterEndereco(usuario.id, function resolverUsuario(error2, endereco){
            if (error2) {
                console.error ("DEU RUIM NO ENDEREÇO", error)
                return;
            }
                // para printar variável o formato é diferente
            console.log (`
            Nome: ${usuario.nome}
            Endereço: ${endereco.endereco}, nº:${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}`
            )
        })
    })
      
})



//const telefone = obterTelefone(usuario.id)

//console.log("usuario", usuario)
//console.log("telefone", telefone)
//console.log("endereco", endereco)


