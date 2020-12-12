const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes/index');
const bodyPArser = require('body-parser');
const cors = require('cors');

// instancia de express en mi app
const app = express();
app.use(cors());

app.use ((req, res, next) => {
    res.header("Acces-Control-Alow-Origin","*");
    res.header("Acces-Control-Alow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Acces-Control-Alow-Methods: GET, POST, DELETE");
    next();
});

// middleware morgan para detectar peticiones
app.use(morgan('dev'));
app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({extended: true}));

//primera ruta
app.use('/api',apiRouter);


app.set('PORT', process.env.PROT || 3000);

app.get('/', function (req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

module.exports = app;