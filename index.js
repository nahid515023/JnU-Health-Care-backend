require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");

const authRouter = require("./router/authenticationRouter");
const appointmentRouter = require("./router/appointmentRouter");
const profileRouter = require("./router/profileRouter");
const articleRouter = require("./router/articleRouter");
const psychologistsRouter = require("./router/psychologistsRouter");
const { isAuth } = require("./middleware/isAuth");

const app = express();

app.use(express.json());
app.use('/auth', authRouter);
app.use('/appointment', appointmentRouter);
app.use('/profile', profileRouter);
app.use('/article', articleRouter);
app.use('/psychologist', psychologistsRouter);
app.use('/image',express.static('uploads'));



app.post('/user', (req, res) => {
    console.log(req.body);
    res.status(200).send('Home page..');
});

app.get('/',(req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
});

const uri = process.env.uri;

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("connected to MongoDB");
    }
    catch (error) {
        console.error(error);
    }
}
connect();

app.listen(process.env.PORT, () => {
    console.log('listening on port 3000');
});