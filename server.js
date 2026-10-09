const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, 'dist');
const port = Number(process.env.PORT || 8766);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp'
};

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type });
  res.end(body);
}

const server = http.createServer((req, res) => {
  let requestPath;
  try {
    requestPath = decodeURIComponent((req.url || '/').split('?')[0]);
  } catch {
    return send(res, 400, 'Bad request');
  }

  const relative = requestPath === '/' ? 'index.html' : requestPath.replace(/^\/+/, '');
  const file = path.resolve(root, relative);
  if (file !== root && !file.startsWith(root + path.sep)) return send(res, 403, 'Forbidden');

  fs.stat(file, (statError, stats) => {
    if (statError || !stats.isFile()) return send(res, 404, 'Not found');
    fs.readFile(file, (readError, data) => {
      if (readError) return send(res, 500, 'Internal server error');
      res.writeHead(200, { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream' });
      res.end(data);
    });
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`HENLYTE local site: http://127.0.0.1:${port}/`);
});
