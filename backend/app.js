const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const userRouter = require('./routes/user.router');
app.use('/api', userRouter);

module.exports = app;