import React from 'react';

function VideoPlayer({ videoId }) {
    console.log("player side:", videoId);
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      frameborder="0"
      allowfullscreen
    ></iframe>
  );
}

export default VideoPlayer;
