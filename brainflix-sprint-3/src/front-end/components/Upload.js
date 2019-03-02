import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import logo from '../../assets/Logo/Logo-brainflix.png';
import profilePicture from '../../assets/Images/Mohan-muruge.jpg';
const videosUrl = `http://localhost:8080/videos`;
const photoUrl = `https://images.unsplash.com/photo-1493640589868-1623c9183146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1496&q=80`;

class Upload extends Component {
  upload = () => {
    const title = this.titleInput.value,
      description = this.descriptionInput.value;
    if (title.length === 0 || description.length === 0) return;
    else {
      axios
        .post(videosUrl, {
          title: title,
          description: description,
          image: photoUrl
        })
        .catch(err => console.log(err))
        .then(() => {
          this.titleInput.value = '';
          this.descriptionInput.value = '';
        });
    }
  };

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
              <img className="upload-image" src={photoUrl} alt="thumbnail" />
            </div>
            <div className="upload-input">
              <span className="header">TITLE YOUR VIDEO</span>
              <input
                className="input-field"
                placeholder="Add a title to your video"
                ref={self => (this.titleInput = self)}
              />
              <span className="header">ADD A VIDEO DESCRIPTION</span>
              <textarea
                className="input-field"
                placeholder="Add a description of your video"
                ref={self => (this.descriptionInput = self)}
              />
            </div>
          </div>
          <div className="divider-btm" />
          <div>
            <button className="publish-btn" onClick={this.upload}>
              PUBLISH
            </button>
            <button className="cancel-btn">CANCEL</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
