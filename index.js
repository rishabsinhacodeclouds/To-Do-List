require('dotenv').config();
const client = require('./config/connect');
const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const routes = require("./routes/ToDoRoutes");

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", routes);

app.listen(PORT, function () {
  console.log("Server Running...");
})