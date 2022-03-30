// dependency 
const http = require('http');
const {handelerReqRes} = require("./healper/HandleResReq")


// app object - module scaffolding
const app = {}

app.config = {
    port : 3000
}

app.createServer = ()=>{
    const server = http.createServer(app.handleRequest)
    server.listen(app.config.port)
}

app.handleRequest = handelerReqRes;

app.createServer();

// console.log(handelerReqRes())

// app.createServer();









