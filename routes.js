let fs = require('fs'); 

const requestHandler = (req,res)=>{
     //response object
     let url= req.url;
     let method= req.method;
     if(url==='/'){
         fs.readFile('message.txt','utf-8',(err,data)=>{
             if(err){
                 console.log(err);
             }
             res.setHeader('Content-Type', 'text/html');
             res.write('<html>');
             res.write('<head><title>My First Page</title></head>');
             res.write(`<body>${data.split('=')[1]}</body>`);
             res.write(`<body><form action="/message" method="POST"><input type="text" name="Message"><button type="submit">Send</button></form></body>`);
             res.write('</html>');
             res.end();
         })
        
         return;
     }
 
     if(url === '/message' && method === 'POST'){
         const body=[];
         req.on('data',(chunk)=>{
             body.push(chunk);
         });
 
         req.on('end',()=>{
             const parsedData = Buffer.concat(body).toString();
             console.log(parsedData);
             fs.writeFile('message.txt',parsedData,(err)=>{
                 res.statusCode = 302;
                 res.setHeader('Location','/');
                 res.end();
             });
         });
         return;
     }
 
     let h1 = 'Welcome Home!';
     if(url === '/about'){
         h1 = 'Welcome To About Us Page!';
     }
     else if(url === '/node'){
         h1 = 'Welcome To My Node.js Project!';
     }
 
     res.setHeader('Content-Type', 'text/html');
     res.write('<html>');
     res.write('<head><title>My First Page</title></head>');
     res.write(`<body><h1>${h1}<h1></body>`);
     res.write('</html>');
     res.end();
}


module.exports = requestHandler;