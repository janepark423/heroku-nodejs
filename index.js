const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: '친구얌' });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT);