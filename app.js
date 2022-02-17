const express = require('express');
// const ejs = require('ejs');
const app = express();
app.set('view engine','ejs');
app.set('views','./');


console.log('hello');
app.get("/",(req,res)=>{

    res.render('index');
    app.use(express.static('./'));
});
app.listen(process.env.PORT || 3000)