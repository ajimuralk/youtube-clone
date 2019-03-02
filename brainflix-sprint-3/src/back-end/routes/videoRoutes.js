const express = require('express');
const router = express.Router();
const fs = require('fs');
const randomize = require('randomatic');
const generateName = require('sillyname');
const videoArray = require('../video-list.json');
const videoListById = require('../video-details.json');

const date = d => {
  return new Date(d).toLocaleDateString();
};

router.get('/', (req, res) => {
  res.json(videoArray);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const selectedVideo = videoListById.find(video => {
    return id === video.id;
  });
  res.json(selectedVideo);
});

router.post('/', (req, res) => {
  const { image, title, description } = req.body;
  const id = randomize('a0', 12);
  const channel = generateName();
  const video = {
    id: id,
    title: title,
    channel: channel,
    image: image
  };

  const videoDetails = {
    id: id,
    title: title,
    channel: channel,
    image: image,
    description: description,
    views: 0,
    likes: 0,
    duration: `2:54`,
    video: 'https://project-2-api.herokuapp.com/stream',
    timestamp: date(new Date()),
    comments: []
  };

  const newArray = [...videoArray, video];
  fs.writeFileSync('video-list.json', JSON.stringify(newArray));

  const newVideoList = [...videoListById, videoDetails];
  fs.writeFileSync('video-details.json', JSON.stringify(newVideoList));

  res.json(videoArray);
});

module.exports = router;
