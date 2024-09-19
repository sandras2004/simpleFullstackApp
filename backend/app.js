const express = require('express')
const cors = require('cors')

 const app = express()
 app.use(cors())
 

app.get('/users',(req,res)=>{
    res.send([{
        name:'John',
        age:19
    },
    {
        name:'Smith',
        age:20
    },
    {
        name:'San',
        age:25
    }
])
})


 app.listen(5000,()=>{
    console.log('Server Running Successfully')
 })