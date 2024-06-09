const fs = require('fs');  
function nodeStyleCallback(err, data) {  
 if (err) {  
   console.error('There was an error Please check and try Again later', err);  
   return;  
 }  
 console.log(data);  
}  
fs.readFile('hello.txt', nodeStyleCallback);  
// fs.readFile('/some/file/that/does-exist', nodeStyleCallback); 