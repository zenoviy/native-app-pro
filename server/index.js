const express = require('express');
const path = require('path');
const newsPost = require('./mock_db/app_posts');

const app = express();




app.get('/all-news', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.status(200).send(JSON.stringify({name: 'news', body: newsPost}));

});


const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
})