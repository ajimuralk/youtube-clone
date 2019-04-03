import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Video from './Video';
import VideoInfo from './VideoInfo';
import NextVideoList from './NextVideoList';
import CommentsDisplay from './CommentsDisplay';
import logo from '../assets/Logo/Logo-brainflix.png';
import profilePicture from '../assets/Images/Mohan-muruge.jpg';

const api_key = '?api_key=4edb152d-f186-4793-836c-d5befa07ea2f';

const videosUrl = `http://localhost:8085/videos`;
const defaultVideo = '1af0jruup5gu';

const mainVideoUrl = id => `http://localhost:8085/videos/${id}`;

class Home extends Component {
  state = {
    videos: [],
    commentList: [],
    mainVideo: null
  };

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
        this.switchVideo(videoId);
      });
  }

  switchVideo(id) {
    axios
      .get(mainVideoUrl(id))
      .then(res => {
        this.setState({
          mainVideo: res.data,
          commentList: res.data.comments
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.mainVideo === null) return 'Loading...';
    return (
      <div>
        <Nav logo={logo} profilePicture={profilePicture} />
        <Video
          image={this.state.mainVideo.image}
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
