const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer((req, res)=>{
const path = url.parse(req.url);
const query = querystring.parse(path.query);
if(path.pathname == '/'){
res.write(`Hello ${query['name']}`);
}else{
    res.write('Not Found');
}
res.end();
}).listen(3000);
console.log('Server is listening on port 3000');