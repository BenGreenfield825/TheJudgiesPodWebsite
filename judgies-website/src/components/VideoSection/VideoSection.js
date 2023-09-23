import config from "../../config";
import "../../styles/gifHeads.css";
import "./VideoSection.css";
import JoshGIF from "../../media/gifs/JoshGIF.gif";
import ErikaGIF from "../../media/gifs/ErikaGIF.gif";
import ChristianGIF from "../../media/gifs/ChristianGIF.gif";
import carrotGIF from "../../media/gifs/croppedCarrot.gif";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const API_KEY = config.apiKey;
const channelId = "UCwDbo_sKQX-ymY3d-Q1HxGQ";

async function getId() {
  let videoId;
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    videoId = data.items[0].id.videoId;
  } catch (error) {
    console.error("Error fetching video:", error);
  }
  return videoId;
}

var idTest = await getId();

function VideoSection() {
  return (
    <div className="Video">
      <div className="centerPiece">
        <div className="gifSection">
          <img className="gifHead" src={JoshGIF} alt="JoshGIF" />
          <img className="gifHead" src={ErikaGIF} alt="ErikaGIF" />
        </div>
        <div id="videoContainer">
          <VideoPlayer videoId={idTest} />
        </div>
        <div className="gifSection">
          <img className="gifHead" src={ChristianGIF} alt="ChristianGIF" />
          <img className="gifHead" src={carrotGIF} alt="carrotGIF" />
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
