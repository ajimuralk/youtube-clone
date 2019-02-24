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

const api_key = "?api_key=4edb152d-f186-4793-836c-d5befa07ea2f";
const videosUrl = `https://project-2-api.herokuapp.com/videos/${api_key}`;
const defaultVideo = "1af0jruup5gu"

const mainVideoUrl = id =>
  `https://project-2-api.herokuapp.com/videos/${id}?api_key=${api_key}`;


class Home extends Component {
  state = {
    videos: [],
    commentList: [],
    mainVideo: null
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
      .catch(err => {
        console.log(err);
      })
      .then(res => {
        const propsId = this.props.match.params.id;
        const videoId = propsId ? propsId : defaultVideo; 
        axios
          .get(mainVideoUrl(videoId))
          .then(res => {
            this.setState({
              mainVideo: res.data,
              commentList: res.data.comments
            });
          })
          .catch(err => {
            console.log(err);
          });
      });
  }

  switchVideo() {
    const videoId = this.props.match.params.id;
    axios
    .get(mainVideoUrl(videoId))
    .then(res => {
      this.setState({
        mainVideo: res.data,
        commentList: res.data.comments
      });
    })
    .catch(err => {
      console.log(err)
    });
  }

  render() {
    if (this.state.mainVideo === null) return "Loading...";
    console.log(this.state.mainVideo.id);
    return (
      <div>
        <Nav logo={logo} profilePicture={profilePicture} />
        <Video image={this.state.mainVideo.image} 
               video={this.state.mainVideo.video}
               api_key={api_key}
        />
        <div className="more-content">
          <div className="more-content__this-video">
            <VideoInfo mainVideo={this.state.mainVideo} />
            <CommentsDisplay
              profilePicture={profilePicture}
              userComments={this.state.commentList}
            />
          </div>
          <aside className="more-content__next-videos">
            <NextVideoList
              sideVideo={this.state.videos}
              currentVideoId={this.state.mainVideo.id}
              switchVideo={this.switchVideo}
            />
          </aside>
        </div>
      </div>
    );
  }
}

export default Home;
