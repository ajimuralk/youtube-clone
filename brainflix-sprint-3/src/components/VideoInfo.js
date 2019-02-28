import React, { Component } from "react";
import likesIcon from "../assets/Icons/PNG/Icon-likes.png";
import viewsIcon from "../assets/Icons/PNG/Icon-views.png";

const date = d => {
  return new Date(d).toLocaleDateString();
};

class VideoInfo extends Component {
  render() {
    const { ...video } = this.props.mainVideo;
    return (
      <section className="VideoInfo">
        <h1 className="VideoInfo__header">{video.title}</h1>
        <div className="VideoInfo__details">
          <span className="user">By {video.channel}</span>
          <span className="date">{date(video.timestamp)}</span>
          <span className="likes">{video.likes}</span>
          <img className="likes__icon" src={likesIcon} alt="heart-icon" />
          <span className="views">{video.views}</span>
          <img className="views__icon" src={viewsIcon} alt="view-icon" />
        </div>
        <div className="divider" />
        <p className="VideoInfo__p">{video.description}</p>
      </section>
    );
  }
}

export default VideoInfo;
