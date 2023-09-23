import React from 'react';
import "./VideoPlayer.css";

function VideoPlayer({ videoId }) {
  return (
    <iframe className='videoPlayer' title='Latest Video'
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
}

export default VideoPlayer;
