const express = require('express')
const app = express()

const port = 4000

app.use(express.json())

const ctrl = require('./controllers/petController')

// pet endpoints
app.get('/api/pets', ctrl.getPets)
app.post('/api/create', ctrl.createPet)
app.delete('/api/delete/:id', ctrl.deletePet)
app.put('/api/update/:id', ctrl.updatePet)

app.listen(port, () => {
    console.log(`up and running on port ${port}`)
})