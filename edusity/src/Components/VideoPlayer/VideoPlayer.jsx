/* eslint-disable react/prop-types */
import "./VideoPlayer.css";
import video from "../../assets/college-video-6XtGR-D3.mp4";
import { useRef } from "react";

const VideoPlayer = ({ play, setPlay }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlay(false);
    }
  };

  return (
    <div
      className={`video-player ${play ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}>
      <video autoPlay muted controls src={video}></video>
    </div>
  );
};

export default VideoPlayer;
