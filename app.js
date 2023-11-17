let http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method,req.headers);
    //response object

    let h1 = 'Welcome Home!';
    if(req.url === '/about'){
        h1 = 'Welcome To About Us Page!';
    }
    else if(req.url === '/node'){
        h1 = 'Welcome To My Node.js Project!';
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write(`<body><h1>${h1}<h1></body>`);
    res.write('</html>');
    res.end();
});

server.listen(4000);
