const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.status(200).send({ message: 'Olá mundo, estou funcionando!'})
});

<<<<<<< HEAD
=======
app.get('/novarotab', (req, res) =>{
    res.status(200).send({ message: 'Nova rota!'})
});

>>>>>>> master
app.listen(4000, () => {
    console.log('Api inicializada.')
})
