import React, { Component } from 'react';
import VideoListItem from './video_list_item.js';


const VideoList = (props) => {
  const videoItems = props.videos.map((video, index) => {
    return (
      <VideoListItem 
        key={video.etag} 
        video={video} 
        onVideoSelect={props.onVideoSelect} 
      /> 
    );
  });
  
  return (
    <ul className="list-group video-list col-sm-6">
      { videoItems }
    </ul>
  );
}

export default VideoList;
