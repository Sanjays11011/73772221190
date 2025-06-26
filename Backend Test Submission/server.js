const express = require('express');
const bodyParser = require('body-parser');
const { nanoid } = require('nanoid');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

const urlDB = {};

app.post('/shorturls', (req, res) => {
  const { url,validity,shortcode } = req.body;
  let shortenedId;
  if(!shortcode){
    shortenedId = nanoid(6);
    urlDB[shortenedId] =  url;
  }
  else{
    shortenedId = shortcode
    urlDB[shortenedId] = url;
  }
  const shortUrl = `http://localhost:${PORT}/${shortenedId}`;
  res.json({shortUrl});
  


});

app.use(auth);    

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
