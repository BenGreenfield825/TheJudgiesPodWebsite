import config from "../../config";
import "../../styles/gifHeads.css";
import "./Video.css";
import JoshGIF from "../../media/gifs/JoshGIF.gif";
import ErikaGIF from "../../media/gifs/ErikaGIF.gif";
import ChristianGIF from "../../media/gifs/ChristianGIF.gif";

const API_KEY = config.TESTapiKey;
const channelId = "UCwDbo_sKQX-ymY3d-Q1HxGQ";

// Make an API request to get the latest video from the channel
fetch(
  `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`
)
  .then((response) => response.json())
  .then(async (data) => {
    // Extract the video ID and embed the video player
    const videoId = await data.items[0].id.videoId;
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
  })
  .catch((error) => {
    console.error("Error fetching video:", error);
  });

//TODO: edit video frame and gif heads to be dynamic size
//TODO: put the background image code somewhere else
function Video() {
  return (
    <div className="Video">
      <div className="centerPiece">
        <div className="gifSection">
          <img className="gifHead" src={JoshGIF} alt="JoshGIF" />
          <img className="gifHead" src={ErikaGIF} alt="ErikaGIF" />
        </div>
        <div id="video-container"></div>
        <div className="gifSection">
          <img className="gifHead" src={ChristianGIF} alt="ChristianGIF" />
        </div>
      </div>
    </div>
  );
}

export default Video;
