// Crear la aplicación
const express = require('express')
const app = express()

// Levantar el servidor en el puerto 5005
//app.listen(5005, () => console.log('SERVER IS RUNNING'))
app.listen(process.env.PORT || 5005, () => console.log('SERVER IS RUNNING'))

// realiza el enrutamiento conforme a la url (Routing)
//app.get('/inicio', (req, res) => res.send('<h3>Successful Server Connection</h3>'))

//llamado del modelo (Model)
const Ranking = require('./models/Ranking.model')

// configuración CORS

const cors = require('cors')
app.use(cors()) // middleware

// Routing
app.get('/api/ranking', (req, res) => {

    Ranking
            .find()        
            .then(allRanking => res.json(allRanking))  
    })

    app.get('/api/details/:ranking_id', (req, res) => {

        const { ranking_id } = req.params
    
        Ranking
            .findById(ranking_id)
            .then(ranking => res.json(ranking))
    })
    
/* configuración CORS
const cors = require('cors')
//app.use(cors())
const corsOptions = {
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))*/
