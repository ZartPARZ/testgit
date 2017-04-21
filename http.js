/**
 * Created by ZartPARZ on 2017-04-20.
 */
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 5555;

const server = (req, res) => {
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end("request\t" + url.parse(req.url).pathname + "\nquery\t" +url.parse(req.url).query);
};

http.createServer(server).listen(port);

console.log(`${new Date()} - Ada Server is running at localhost:${port}`);