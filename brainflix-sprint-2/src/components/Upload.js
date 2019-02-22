import React, { Component } from "react";
import Nav from "./Nav";
import logo from "../BrainFlix-Sprint-1/4.0 - Assets/Logo/Logo-brainflix.png";
import profilePicture from "../BrainFlix-Sprint-1/4.0 - Assets/Images/Mohan-muruge.jpg";

class Upload extends Component {
  render() {
    return (
      <div className="Upload">
        <Nav logo={logo} profilePicture={profilePicture} />
        <div className="container">
          <h1 className="h1-header">Upload Video</h1>
          <div className="divider" />
          <div className="Upload__area">
            <div className="upload-preview">
              <span className="header">VIDEO THUMBNAIL</span>
              <img
                className="upload-image"
                src={"../images/Upload-video-preview.jpg"}
                alt="user upload"
              />
            </div>
            <div className="upload-input">
              <span className="header">TITLE YOUR VIDEO</span>
              <input
                className="input-field"
                placeholder="Add a title to your video"
              />
              <span className="header">ADD A VIDEO DESCRIPTION</span>
              <textarea
                className="input-field"
                placeholder="Add a description of your video"
              />
            </div>
          </div>
          <div className="divider-btm" />
          <div>
            <button className="publish-btn">PUBLISH</button>
            <button className="cancel-btn">CANCEL</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
