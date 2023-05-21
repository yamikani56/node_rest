let express = require('express')
let fs=require('fs')

let app =express()

app.get("/",(req,res)=>{
    fs.readFile(__dirname+"/"+"users.json","utf8",(err,data)=>{
        console.log(data)
        res.send(data)
    })
})

let server= app.listen(8000,()=>{
    let host = server.address().address
    let port=server.address().port
    console.log("Server running on http://%s:%s",host,port)
    console.log(typeof port)
})

