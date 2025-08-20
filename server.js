// server.js

const http = require('http');
const fs = require('fs');
const path = require('path'); 


const hostname = '127.0.0.1'; 
const port = 3000;

const server = http.createServer((req, res) => {
  if(req.url === '/api/users'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
    return;
  }

  const url = req.url === '/' ? 'index.html' : req.url.slice(1);
  const fullPath = path.join(__dirname, url);

 fs.readFile(fullPath,(err, data) => {
    if(err){
      res.statusCode = 404;
      res.end('File not found.');
      return;
    }

    let contentType = 'text/html';
    if(url.endsWith('.css')){
      contentType ='text/css';
    } else if (url.endsWith('.js')) {
      contentType = 'text/javascript';
    } else if (url.endsWith('.jpg')|| url.endsWith('.jpeg')){
      contentType ='image/jpeg';
    }else if (url.endsWith('.png')){
      contentType = 'image/png';
    }
    else if (url.endsWith('.webp')) {
      contentType = 'image/webp';
    }
    
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});