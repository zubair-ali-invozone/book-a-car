const express = require('express');
const app = express();

const port = 3000;

require('dotenv').config();
require("./config/connection");

const routes = require('./routes/routes');
app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
