import logo from "../../media/channelPfp.png";
import background from "../../media/90sBackground.jpg";
// import background from "../../media/80sBackground.svg";
import "./Home.css"
import Video from "../Video/VideoIndex"
import ExternalLinkSection from "../ExternalLinkSection/ExternalLinkSection";

function Home() {
  return (
    <div
      className="Home"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >

      <div className="LogoContainer">
        <img className="Logo" src={logo} alt="Logo" />
      </div>
      <Video/>
      <ExternalLinkSection />
      
    </div>
  );
}

export default Home;
