let messages = [];
let id = 0;

module.exports = {
    create: (req,res) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages);
    },

    update: (req, res) => {
        let {id} = req.params;
        
        let {text}= req.body
        messages.forEach((message)=>{
            if(message.id == id){
                message.text = text;
            }

        })
        res.status(200).send(messages);
        
    },

    delete: (req, res) => {
        const {id} = req.params;
        messages.forEach((message)=>{
            if(message.id == id){
                messages.splice(id, 1)
            }

        })
        res.status(200).send(messages);
    }
}