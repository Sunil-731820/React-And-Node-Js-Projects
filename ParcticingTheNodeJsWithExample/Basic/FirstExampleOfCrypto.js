const crypto = require('crypto');  
const secret = 'Sunil';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('Welcome to Sunil Kumar ')  
                   .digest('hex');  
console.log(hash); 

