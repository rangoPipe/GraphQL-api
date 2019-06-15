import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import { connect } from "./database";

const app = express();

connect();

app.get('/', (req,res) => {
    res.json({
        message : "hola mundo"
    })
})

app.use('/graphql',graphqlHTTP({
    graphiql : true,
    schema : schema,
    context : {
        messageId : 'test'
    }
}));

app.listen(3000, () => {
    console.log("escuchando en el puerto 3000"); 
})