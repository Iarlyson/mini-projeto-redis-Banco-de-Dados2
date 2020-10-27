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
    const id = parseInt(req.params.id);
    const {codigo, quantidade} = req.body;

    client.get(id, function(err, reply){
    if(reply != null){
        
    }else{


const produtos = {
    codigo: codigo,
    quantidade: quantidade,
};

client.setex(id, 300, JSON.stringify(produtos), function(err, resp){
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
        const teste = JSON.parse(reply.toString());
        res.status(200).send(teste);
    }else{
        console.log("Chave Não encontrada");
    }
});
};
  