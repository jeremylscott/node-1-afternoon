const express = require('express')
const {json} = require('body-parser')
const controller = require('./controllers/controller')
const app = express()
const port = 3001

app.use(json())


app.get('/api/messages/:id',controller.getMessage)

app.get('/api/messages',controller.getMessages)

app.post('/api/messages',controller.postMessage)

app.delete('/api/messages/:id',controller.deleteMessage)

app.put('/api/messages/:id',controller.updateMessage)

app.listen(port, () =>  {console.log(`Server listening on port ${port}`)})