# Simple p5.js and Node.js Example

This repo includes a simple example using p5.js with a Node.js server using Express. The server responds to a GET request and sends a JSON object back to the client, which is then rendered on a p5.js canvas.

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary Node.js modules.

### Running the Server

1. Start the server by running `node index.js`.
2. Open your browser and go to `http://localhost:3000`.

The server is set up using Express.js to listen on a specified port. It serves static files from the 'public' directory. It handles GET requests on the '/talk' route and sends back a JSON object. The p5.js script makes a request to the server and receives a JSON response. It then renders the response data on the canvas.

- [p5.js Reference](https://p5js.org/reference/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js](https://expressjs.com/)
