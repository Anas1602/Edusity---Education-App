/* eslint-disable react/prop-types */
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlay }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="about-img" src={about_img} alt="" />
        <img
          onClick={() => {
            setPlay(true);
          }}
          className="play-icon"
          src={play_icon}
          alt=""
        />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow&apos;s Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          totam, reprehenderit dolore blanditiis, voluptatum corrupti
          consequuntur consequatur aut voluptatem itaque quae molestias unde
          facere, impedit quisquam possimus qui iure eligendi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          necessitatibus corporis inventore alias error nam vel, nihil impedit
          excepturi distinctio architecto debitis maiores? Pariatur, voluptatum
          optio.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          asperiores temporibus, odit harum ut accusantium itaque aut
          distinctio? Tempora quos cum voluptate! Eveniet quod ipsam beatae
          molestias dolore, nihil quas.
        </p>
      </div>
    </div>
  );
};

export default About;
