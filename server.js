const express   = require("express");
const app       = express();
const PORT      = 3000;

app.get('/', (req, res) => {
    const status = res.statusCode;
    if(!res.statusCode === 200){
        res.send(`Status ${status} : Something is wrong`)
    }else{
        res.send(`Status ${status} : Everything OK`)
    }
})

app.listen(PORT)