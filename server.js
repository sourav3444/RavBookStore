if(process.env.NODE_ENV!=='production'){
require('dotenv').config()
}

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const app = express();
const indexRouter = require('./routes/index');
app.set('views',__dirname + '/views')
app.set('view engine','ejs');
app.set(express.static('public'));
app.set('layout','layouts/layout')
app.use(expressLayouts)
//mongodb connection
 mongoose.connect(process.env.DATABASE_URL,({useNewUrlParser:true,useUnifiedTopology: true})).then(connection=>{
     console.log("connected successfully")
 }).catch(error=>{
     console.error(error)
 })

app.use('/',indexRouter);

app.listen(process.env.PORT,()=>{
    console.log("server running on port 3000");
})
