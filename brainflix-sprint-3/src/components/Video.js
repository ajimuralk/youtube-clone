import React, { Component } from "react";

class Video extends Component {
  render() {
    const videoUrl = `${this.props.video}${this.props.api_key}`
    
    return (
      <main className="Video">
        <video
          className="Video__player"
          controls
          autoPlay
          src={videoUrl}
        />
      </main>
    );
  }
}

export default Video;
