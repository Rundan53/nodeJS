let http = require('http');

const server = http.createServer((req,res)=>{
    console.log('Rundan');
});

server.listen(4000)
