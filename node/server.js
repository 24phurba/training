const http = require('http');

const PORT = 3000;
let todos = [];
let nextId = 1;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  res.setHeader('Content-Type', 'application/json');


  if (method === 'GET' && url === '/todos') {
    res.writeHead(200);
    res.end(JSON.stringify(todos));
  }


  else if (method === 'GET' && url.startsWith('/todos/')) {
    const id = parseInt(url.split('/')[2]);
    const todo = todos.find(t => t.id === id);

    if (todo) {
      res.writeHead(200);
      res.end(JSON.stringify(todo));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: '404' }));
    }
  }

  
  else if (method === 'POST' && url === '/todos') {
    let body = '';
    req.on('data', chunk => (body += chunk.toString()));
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const newTodo = {
          id: nextId++,
          title: data.title || '',
          description: data.description || '',
          note: data.note || '',
          completed: false,
        };
        todos.push(newTodo);
        res.writeHead(201);
        res.end(JSON.stringify(newTodo));
      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'Invalid json' }));
      }
    });
  }


  else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: '404' }));
  }
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});


