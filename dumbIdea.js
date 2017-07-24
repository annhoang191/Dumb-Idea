const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/dumbIdea.html');
})


app.listen((process.env.PORT || 5000) , function() {
  console.log('Server started');
})
