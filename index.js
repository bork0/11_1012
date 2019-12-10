const http = require ('http');
const os = require ('os');
const path = require ('path');
const customModule = require(`./module.js`);

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`<h1 style="text-transform: uppercase; text-align: center;">${customModule.userGreeting()}</h1>`);
    response.write(`<h2>Date of Request: ${customModule.getDate()}</h2>`);
    response.write(`<h2> Current user name: ${os.hostname()}</h2>
    <h2> OS Type: ${os.type()}</h2>
    <h2> System Work Time: ${os.uptime()}</h2>
    <h2> Current Work Directory: ${os.homedir()}</h2>
    <h2> Server File Name: ${path.basename(`D:/Desktop/SoftServe/home/#11_1012/index.js`)}</h2>`);
    response.end();
}).listen(5000);