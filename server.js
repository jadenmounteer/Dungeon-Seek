const express = require('express');
const app = express();

// Launch index.html
app.use(express.static("src"));

app.listen(3000, function() {
    console.log('listening on 3000')
});