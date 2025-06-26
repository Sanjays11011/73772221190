const express = require('express');
const app = express();
const auth = require('./middleware/auth');
const logger = require('./middleware/logger');



app.use(auth);      
app.use(logger);     

//app.use('/api', someRoute);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
