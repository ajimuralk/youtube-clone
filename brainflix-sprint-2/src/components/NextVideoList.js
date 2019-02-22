import React, { Component } from "react";
import NextVideo from "./NextVideo";

class NextVideoList extends Component {
  render() {
    const videoList = this.props.sideVideo.map((video, i) => {
      return (
        <NextVideo
          image={video.image}
          title={video.title}
          user={video.channel}
          key={i}
        />
      );
    });

    return (
      <div className="NextVideoList">
        <div className="NextVideoList__header">NEXT VIDEO</div>
        {videoList}
      </div>
    );
  }
}

export default NextVideoList;
