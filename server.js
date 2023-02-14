const env = require("dotenv")
env.config()
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path = require('path')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts);
app.use(express.static(path.join(__dirname + './public')));

const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open',()=>console.log('Connected to mongoose'))



app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);