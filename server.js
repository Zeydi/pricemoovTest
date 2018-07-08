const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('express server is uo on 3000');
});
