let messages = []
let id = 0


const getMessage = (req,res,next) => {
    id = req.params.id
    const message = messages.find(message =>
       +message.id === +req.params.id )
       if(!message) {
           res.status(400).json({error: 'No message found'})
       }
       else {
            res.json(messages)
       }   
}

const postMessage = (req,res,next) => {
    req.body.id = messages.length
    messages.push(req.body)
    res.json(messages)
}

const getMessages = (req,res,next) => {
    res.json(messages)
}

const deleteMessage = (req,res,next) => {
    const index = messages.findIndex(message => +message.id === +req.params.id)
        messages.splice(index,1)
        res.json(messages)
}

const updateMessage = (req,res,next) => {
    const index = messages.findIndex(message => +message.id === +req.params.id)
    messages[index].text = req.body.text
    res.json(messages)
}


module.exports = {
    getMessage,
    getMessages,
    postMessage,
    deleteMessage,
    updateMessage      
}