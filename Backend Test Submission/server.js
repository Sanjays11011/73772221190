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

  const now = Date.now();
  const expirationTime = (validity && !isNaN(validity)) ?now + Number(validity) *60 *1000 : now + 30 *60 *1000;

 

  if(!shortcode){
    shortenedId = nanoid(6);
    urlDB[shortenedId] =  url;
  }
  else{
    shortenedId = shortcode
    urlDB[shortenedId] = url;
  }

  urlDB[shortenedId] = { url, expirationTime };


  const shortUrl = `http://localhost:${PORT}/${shortenedId}`;
  res.json({shortUrl, expirationTime});
  


});

app.get('/:shortId', (req, res) => {
    const shortId = req.params.shortId;
    const entry = urlDB[shortId];
    
    if(!entry){
      res.status(404).send('Short URL not found');
    }

    const now = Date.now();
    if(now > entry.expirationTime){
      delete urlDB[shortId];
      res.status(404).send('The url expired');
    }
})
  

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
