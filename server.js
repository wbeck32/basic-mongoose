/* eslint no-console: "off" */
const app = require('./lib/app');
const connect = require('./lib/helpers/connect');
const http = require('http');
// const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/basic-mongoose';
const port = process.env.PORT || 3001;
const server = http.createServer(app);
// connect(dbUri);

server.listen(port, () => {
    console.log('server running on', server.address());
});
