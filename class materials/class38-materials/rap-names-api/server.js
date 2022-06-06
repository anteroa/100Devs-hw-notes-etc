const { response } = require('express')
const express = require('express')
const app = express() //allows us to use the express methods using the app.method() notation
const PORT = 8000

const rappers = {
    '21 savage' : {
        'age': 29,
        'birthname': 'Shéyaa Bin Abraham-Joseph', 
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29, 
        'birthname': 'Chancellor Bennet', 
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 'unknown', 
        'birthname': 'unknown', 
        'birthLocation': 'unknown'}
    }
    

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    //evaluate and return data accordingly
    const rapperName = req.params.name.toLowerCase()
    if( rappers[rapperName] ) {
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
    
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}, better go catch it!`)
})