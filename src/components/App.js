import React, { Component } from 'react';
import videodata from '../videodata.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideoNumber: 0,
    }
  }

  componentWillMount(){
    let data = videodata.video;
    this.setState({
      videos: data
    });
  }

  playVideo = (num) => {
    this.setState({
      currentVideoNumber: num
    });
    let currentVid = this.refs["video" + num];
    currentVid.pause();
    currentVid.currentTime = '0';
    currentVid.play();
}

  render() {
    return (
      <div className="app">
        <h1 className="app-title">Video Piano</h1>

        <div className="video-container">
        {
          this.state.videos.map((video, i) => {
            return  <video
                        ref={"video"+i}
                        src={video.src}
                        key={i}
                        controls
                        className ={this.state.currentVideoNumber===i ? "video-visible": "video-invisible"}
                    />
          }
        )}
        </div>
        <div className="button-container">
          <button className="video-button" onClick={() => this.playVideo(0)}>1</button>
          <button className="video-button" onClick={() => this.playVideo(1)}>2</button>
          <button className="video-button" onClick={() => this.playVideo(2)}>3</button>
        </div>
      </div>
    );
  }
}

export default App;
