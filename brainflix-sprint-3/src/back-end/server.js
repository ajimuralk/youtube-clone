const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const videoRoutes = require('./routes/videoRoutes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/videos', videoRoutes);

app.listen(8080, () => {
  console.log('Server started: PORT 8080');
});
