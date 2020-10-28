require('dotenv').config();
const redis = require("redis");

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

client.on("connect", function(error){
    console.log("Base de Dados no Redis nosql conectado com sucesso!!");
});

exports.criarcarrinho = async (req, res) => {
    var atual = []
    const id = parseInt(req.params.id);
    const {codigo, quantidade} = req.body;
    const produtos = {
        
        codigo: codigo,
        quantidade: quantidade,
        
    };


    console.log("Teste" + JSON.stringify(produtos))
    client.get(id, function(err, reply){
        
        
    if(reply != null){
        console.log("Teste2" + JSON.stringify(produtos))
        atual = JSON.parse(reply)
        console.log("Carrinho já existe");
        atual.push(produtos)      
        client.setex(id, 300, JSON.stringify(atual), function(err, resp){
            if(err) throw err;
            console.log(resp);
       });
        res.status(201).send({
            message: "",
            body: {
              product: { id}
            },
          });


    }else{

    atual.push(produtos)
    client.setex(id, 300, JSON.stringify(atual), function(err, resp){
    if(err) throw err;
    console.log(resp);
    }); 
  
    res.status(201).send({
      message: "Carrinho criado no Redis",
      body: {
        product: { id}
      },
    });
    }
    });
};


exports.listarCarrinho = async (req, res) => {
    const id = parseInt(req.params.id);
    client.get(id, function(err, reply){
    if(reply != null){
        const teste = JSON.parse(reply);
        res.status(200).send(teste);
    }else{
        console.log("Chave Não encontrada");
    }
});
};
  