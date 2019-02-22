import React, { Component } from "react";
import likesIcon from "../BrainFlix-Sprint-1/4.0 - Assets/Icons/PNG/Icon-likes.png";
import viewsIcon from "../BrainFlix-Sprint-1/4.0 - Assets/Icons/PNG/Icon-views.png";

const date = (d) => {
  return new Date(d).toLocaleDateString();
};

class VideoInfo extends Component {
  render() {
    // const { video } = this.props.mainVideo
      return (
        <section className="VideoInfo">
          <h1 className="VideoInfo__header">{this.props.mainVideo.title}</h1>
          <div className="VideoInfo__details">
            <span className="user">By {this.props.mainVideo.channel}</span>
            <span className="date">{date(this.props.mainVideo.timestamp)}</span>
            <span className="likes">{this.props.mainVideo.likes}</span>
            <img className="likes__icon" src={likesIcon} alt="heart-icon" />
            <span className="views">{this.props.mainVideo.views}</span>
            <img className="views__icon" src={viewsIcon} alt="view-icon" />
          </div>
          <div className="divider" />
          <p className="VideoInfo__p">{this.props.mainVideo.description}</p>
        </section>
      );
  }
}

export default VideoInfo;
