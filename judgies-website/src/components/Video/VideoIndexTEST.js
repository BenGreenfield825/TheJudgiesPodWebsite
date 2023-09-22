import config from "../../config";
import "../../styles/gifHeads.css";
import "./Video.css";
import JoshGIF from "../../media/gifs/JoshGIF.gif";
import ErikaGIF from "../../media/gifs/ErikaGIF.gif";
import ChristianGIF from "../../media/gifs/ChristianGIF.gif";
import carrotGIF from "../../media/gifs/carrotGIF.gif"
import VideoPlayer from "../VideoPlayer/VideoPlayerIndex";

const API_KEY = config.TESTapiKey;
const channelId = "UCwDbo_sKQX-ymY3d-Q1HxGQ";

// Make an API request to get the latest video from the channel
// async function getId(){
// let test1 = "";
// fetch(
//   `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`
// )
//   .then((response) => response.json())
//   .then(async (data) => {
//     // Extract the video ID and embed the video player
//     const videoId = await data.items[0].id.videoId;
//     var testVideoId = videoId;
//     var youtubeLink = "https://www.youtube.com/embed/${videoId}";
//     test1 = videoId;
//     console.log(videoId)
//     // return videoId;
//     // const videoContainer = document.getElementById("videoContainer");
//     // videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
//   })
//   .catch((error) => {
//     console.error("Error fetching video:", error);
//   });
//   console.log("test1", test1);
//   return test1;
// }
// var test = await getId();
// console.log("test", test);

async function getId() {
  let test1 = "";
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const videoId = data.items[0].id.videoId;
    test1 = videoId;
    console.log(videoId);
  } catch (error) {
    console.error("Error fetching video:", error);
  }

  console.log("getId:", test1);
  return test1;
}
(async () => {
  var test = await getId();
  console.log("outside:", test);
})();

//TODO: edit video frame and gif heads to be dynamic size
function Video() {
  return (
    <div className="Video">
      <div className="centerPiece">
        <div className="gifSection">
          <img className="gifHead" src={JoshGIF} alt="JoshGIF" />
          <img className="gifHead" src={ErikaGIF} alt="ErikaGIF" />
        </div>
        <div id="videoContainer">
          <VideoPlayer videoId={getId()} />
        </div>
        <div className="gifSection">
          <img className="gifHead" src={ChristianGIF} alt="ChristianGIF" />
          <img className="gifHead" src={carrotGIF} alt="carrotGIF" />
        </div>
      </div>
    </div>
  );
}
//TODO: remove comment
// export default Video;
