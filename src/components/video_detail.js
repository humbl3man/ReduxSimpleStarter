import React from 'react';


const VideoDetail = ({video}) => {
  
  if (!video) {
    return (
      <div className="col-sm-6">
        <p className="text-muted">Waiting to fetch video...</p>
      </div>
    );
  }
  
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  return (
    <div className="video-detail col-sm-6">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="video-description mt-3">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
  
  
};


export default VideoDetail;
