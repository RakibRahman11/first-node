const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const port = 3000

const users = [
    { id: 0, name: 'Rakib Rahman', email: 'rahmanrakib207@gmail.com' },
    { id: 1, name: 'Tanvir Rahman', email: 'rahmantanvir207@gmail.com' },
    { id: 2, name: 'Riddho Rahmam', email: 'rahmanriddho207@gmail.com' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

})
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    res.json(newUser)
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port)
})