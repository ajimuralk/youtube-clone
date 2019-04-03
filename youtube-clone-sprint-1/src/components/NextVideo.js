import React, { Component } from 'react';

class NextVideo extends Component {

  render() {
    return (
      <div className="NextVideo">
        <img src={this.props.image} alt="thumbnail"/>
            <div className="NextVideo-info">
                <span className="NextVideo__title">{this.props.title}</span>
                <span className="NextVideo__user">{this.props.user}</span>
            </div>
      </div>
    );
  }
}

export default NextVideo;

