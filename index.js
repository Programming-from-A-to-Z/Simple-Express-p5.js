import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, serverReady);
app.use(express.static('public'));

app.get('/talk', handleRequest);

async function handleRequest(request, response) {
  let name = request.query.name;
  let reply = {
    message: `Hi ${name}!`,
    time: Date.now(),
  };
  response.json(reply);
}

function serverReady() {
  // 127.0.0.1
  console.log(`http://localhost:${port}`);
}
