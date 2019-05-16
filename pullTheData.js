// this only works with Node.js - it's tough to pull it onto a webpage without creating a backend
var fs = require('fs');

fs.readFile("data.txt", function(error, data) {
    var dataString = data.toString()
    console.log(dataString);
    var dataArray = dataString.split('-');
    console.log(dataArray)
});

