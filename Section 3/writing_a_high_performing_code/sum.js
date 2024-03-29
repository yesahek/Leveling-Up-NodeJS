const http = require('http');
const querystring = require('querystring');
const url = require('url');

const server = http.createServer((req, res) => {
    let sum = 0;
    const query = url.parse(req.url).query;
    const n = Number(querystring.parse(query)['n']);
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    res.end(String(sum));
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});