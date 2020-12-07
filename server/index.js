const express = require('express');
const path = require('path');
const newsPost = require('./mock_db/app_posts');

const app = express();




app.get('/all-news', (req, res) => {
  console.log(1)
  res.status(200).send({name: 'news', body: newsPost});

});


const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
})