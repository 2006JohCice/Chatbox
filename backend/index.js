const express = require('express');
const route = require('./router/user/index.router')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
require('dotenv').config()

const database = require("./config/db.js")
database.connect()
const app = express();
const port = process.env.PORT || 5000;


//Socket IO
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

require('./sockets/socket.js')(io);

// app.use(cors({ origin: "http://localhost:3000" }));



// app.use(cors());
app.use(express.json());
app.use(cookieParser());


// Route
route(app)



server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});


