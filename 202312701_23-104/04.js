const answer = '';

const http = require('http');

http.createServer(async (req, res) => {
    const data = await fs.readFile('./04.html');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
})

console.log(answer);