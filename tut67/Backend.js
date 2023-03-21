const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const HOME = fs.readFileSync('./home01.html')
const CUSTOMER = fs.readFileSync('./Customer.html')
const TRANSACTION = fs.readFileSync('./Transaction.html')


const server = http.createServer((req, res) => {
  console.log(req.url)


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
if(url == '/home01'){
  res.end(HOME);
}
else if(url == '/Customer'){
  res.end(CUSTOMER);
}
else if(url == '/Transaction'){
  res.end(TRANSACTION);
}
else{
  res.statusCode = 404;
  res.end("<h1>404 not found</h1>");
}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


