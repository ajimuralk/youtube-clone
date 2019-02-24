import React, { Component } from "react";


class Video extends Component {
  render() {
    return (
      <main className="Video">
        <video
          className="Video__player"
          controls
          autoPlay
          src={`${this.props.video}?api_key=4edb152d-f186-4793-836c-d5befa07ea2f`}
          poster={this.props.image}
        />
      </main>
    );
  }
}

export default Video;
