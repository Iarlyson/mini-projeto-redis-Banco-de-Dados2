const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Dados no Postgres conectado com sucesso!');
});


module.exports = {
  query: (text, params) => pool.query(text, params),
};

const redis = require("redis");

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});


client.on("connect", function(error){
    console.log("Base de Dados no Redis nosql conectado com sucesso!!");
});

client.on("error", function(error){
    console.log(error);
});

