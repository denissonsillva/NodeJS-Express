const http = require('http');
const url = require('url');

http
  .createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const pathName = parsedUrl.pathname;
    const queryParams = parsedUrl.query;

    if (pathName === '/favicon.ico') {
      response.write('404');
      response.end();
      return;
    }

    console.log('A soma é: ' + (Number(queryParams.num1) + Number(queryParams.num2)));

    if (request.method === 'POST') {
      response.write('Hello Denisson');
      response.end();
    } else if (request.method === 'GET') {
      response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8 ' });
      response.write('A soma é: ' + (Number(queryParams.num1) + Number(queryParams.num2)));
      response.end();
    }
  })
  .listen(9090);
