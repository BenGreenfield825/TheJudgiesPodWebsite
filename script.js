import config from './config.js';
const apiKey = config.apiKey;
const channelId = 'UCwDbo_sKQX-ymY3d-Q1HxGQ';

// Make an API request to get the latest video from the channel
fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`)
    .then(response => response.json())
    .then(data => {
        // Extract the video ID and embed the video player
        const videoId = data.items[0].id.videoId;
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    })
    .catch(error => {
        console.error('Error fetching video:', error);
    });
