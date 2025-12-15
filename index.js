var express = require('express');
var app = express();

// Root route
app.get('/', function (req, res) {
    res.send('my docker build');
});

// Server listener
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});

module.exports = app;

