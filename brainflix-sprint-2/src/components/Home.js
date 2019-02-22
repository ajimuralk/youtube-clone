import React, { Component } from "react";
import Nav from "./Nav";
import Video from "./Video";
import VideoInfo from "./VideoInfo";
import NextVideoList from "./NextVideoList";
import CommentsDisplay from "./CommentsDisplay";
import logo from "../BrainFlix-Sprint-1/4.0 - Assets/Logo/Logo-brainflix.png";
import profilePicture from "../BrainFlix-Sprint-1/4.0 - Assets/Images/Mohan-muruge.jpg";
import "../styles/App.css";
import "../styles/global.css";
import axios from "axios";

const api_key = "4edb152d-f186-4793-836c-d5befa07ea2f";
const videosUrl = `https://project-2-api.herokuapp.com/videos/?api_key=${api_key}`;

const mainVideoUrl = (id) => `https://project-2-api.herokuapp.com/videos/${id}?api_key=${api_key}`;

class Home extends Component {
  state = {
    videos: [],
    mainVideo: {}
  };

  //VIDEO API
  componentDidMount() {
    axios
      .get(videosUrl)
      .then(res => {
        this.setState({
          videos: res.data
        });
    })
      .then(res => {
        axios
          .get(mainVideoUrl("1af0jruup5gu"))
          .then(res => {
            this.setState({
              mainVideo: res.data
            })
            console.log(this.state.mainVideo, "in last axios req")
          });
      });
  };

  render() {
    if(this.state.mainVideo === null) return "Loading..."
    console.log(this.state.mainVideo, "in render")
    return (
      <div>
        <Nav logo={logo} profilePicture={profilePicture} />
        <Video />
        <div className="more-content">
          <div className="more-content__this-video">
            <VideoInfo mainVideo={this.state.mainVideo} />
            <CommentsDisplay
              profilePicture={profilePicture}
              userComments={this.props.userComments}
            />
          </div>
          <aside className="more-content__next-videos">
            <NextVideoList sideVideo={this.state.videos} />
          </aside>
        </div>
      </div>
    );
  }
}

export default Home;
