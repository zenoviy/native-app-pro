const express = require('express');
const { request } = require('http');
const cors = require('cors');
const https = require('https');
const path = require('path');
const newsPost = require('./mock_db/app_posts');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./SSL-Certificate/key.pem'),
  cert: fs.readFileSync('./SSL-Certificate/cert.pem')
};


const app = express();

app.use(cors())


app.get('/all-news', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.status(200).send(JSON.stringify({name: 'news', body: newsPost}));

});


const PORT = process.env.PORT || 3100;

/*https.createServer(options, app).listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});*/
app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
