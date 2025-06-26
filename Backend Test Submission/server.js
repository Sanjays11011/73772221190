const express = require('express');
const app = express();
const authRoute = require('./routes/auth')

app.use(auth);    
  
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
