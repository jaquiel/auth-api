const fruits = [
    {
        "id" : 1,
        "name" : "apple"
    },
    {
        "id" : 2,
        "name" : 'banana'
    },
    {
        "id" : 3,
        "name" : 'orange'
    },
]

module.exports = {
    async index(req, res) {
        return res.json(fruits)
    },
    async show(req, res) {
        const { index } = req.params  
        return res.json(fruits[index-1])
    },
    async create(req, res) {
        const { fruit } = req.body
        fruits.push(fruit)    
        return res.json(fruits)
    },
    async update(req, res) {
        const { index } = req.params  
        const { fruit } = req.body    
        fruits[index] = fruit    
        return res.json(fruits)
    },
    async destroy(req, res) {
        const { index } = req.params  
        fruits.splice(index, 1)        
        return res.json(fruits)
    }
}