var fs = require('fs');

fs.readFile("data.txt", function(error, data) {
    var dataString = data.toString()
    console.log(dataString);
    var dataArray = dataString.split('-');
    console.log(dataArray)
});

