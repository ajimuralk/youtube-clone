import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <main className="Video">
        <video
          className="Video__player"
          controls
          poster={"./images/video-list-0.jpg"}
        />
      </main>
    );
  }
}

export default Video;
