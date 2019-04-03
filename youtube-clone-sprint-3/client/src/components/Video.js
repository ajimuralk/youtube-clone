import React, { Component } from 'react';

class Video extends Component {
  render() {
    const { image, video } = this.props.video;
    const { api_key } = this.props;
    const videoUrl = `${video}${api_key}`;

    return (
      <main className="Video">
        <video
          className="Video__player"
          controls
          poster={image}
          autoPlay
          src={videoUrl}
        />
      </main>
    );
  }
}

export default Video;
