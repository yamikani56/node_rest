let express = require('express')
let fs=require('fs')
let morgan=require('morgan')

let app =express()

app.use(morgan('tiny'))

let user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }



app.get("/listUsers",(req,res)=>{
    fs.readFile(__dirname+"/"+"users.json","utf8",(err,data)=>{
        // console.log(data)
        res.send(data)
        data=JSON.parse(data)
        // console.log(data)
    })
})

app.get("/:id",(req,res)=>{
    fs.readFile(__dirname+"/"+"users.json","utf8",(err,data)=>{
        let users = JSON.parse(data)
        let user = users["user"+req.params.id]
        console.log(user)
        res.send(user)
    })
})

app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
 
let server= app.listen(8000,()=>{
    let host = '127.0.0.1'
    let port=server.address().port
    console.log("Server running on http://%s:%s",host,port)
})

