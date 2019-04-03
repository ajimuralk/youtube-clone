import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NextVideo extends Component {
  render() {
    return (
      <div className="NextVideo">
        <Link
          className="NextVideo-link"
          to={'/videos/' + this.props.id}
          // onClick={() => this.switchVideo(this.props.id)}
        >
          <img src={this.props.image} alt="thumbnail" />
          <div className="NextVideo-info">
            <span className="NextVideo__title">{this.props.title}</span>
            <span className="NextVideo__user">{this.props.user}</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default NextVideo;
