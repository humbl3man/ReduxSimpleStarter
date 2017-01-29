import React, { Component } from 'react';

const VideoListItem = ({video, onVideoSelect, selectedVideo}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  
  const setClassName = () => {
    return (video === selectedVideo) ? "list-group-item selected" : "list-group-item";
  };
  
  return (
    <li className={setClassName()} onClick={() => onVideoSelect(video)}>
      <div className="media">
        <img className="d-flex mr-3" src={imageUrl} alt={video.snippet.title} />
        <div className="media-body">
          <h5 className="mt-0">{video.snippet.title}</h5>
          {video.snippet.description}
        </div>
      </div>    
    </li>
  );  
}

export default VideoListItem;
