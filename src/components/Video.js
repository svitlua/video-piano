import React from 'react';

const Video = ({currentVideoNumber}) => (
   <div className="video-container">
      <video className ={currentVideoNumber===0 ? 'video-visible': 'video-invisible'} src="https://d15t3vksqnhdeh.cloudfront.net/videos/1.mp4" controls loop muted>
      </video>
      <video className = {currentVideoNumber===1 ? 'video-visible': 'video-invisible'} src="https://d15t3vksqnhdeh.cloudfront.net/videos/2.mp4" controls loop muted>
      </video>
      <video className = {currentVideoNumber===2 ? 'video-visible': 'video-invisible'} src="https://d15t3vksqnhdeh.cloudfront.net/videos/3.mp4" controls loop muted>
      </video>
    </div>
);

export default Video
