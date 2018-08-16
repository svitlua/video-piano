import React, { Component } from 'react';
import Video from './Video';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoNumber: 0
    }
  }

  playVideo = (num) => {
    this.setState({
      currentVideoNumber: num
    });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-title">Video Piano</h1>
        <Video currentVideoNumber = {this.state.currentVideoNumber}/>
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
