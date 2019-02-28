const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const videoArray = require('./video-list');
const videoListById = require('./video-details')

app.use(bodyParser.urlencoded({extended: false}));

app.get('/videos', (req, res) => {
  const videoList = videoArray.map(video => {
    return video
  })
  res.send(videoList)
})

app.listen(8080, () => {
  console.log('Server started: PORT 8080')
})