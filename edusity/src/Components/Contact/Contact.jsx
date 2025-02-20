import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "df06626a-97c8-442f-897f-5d65730a9bb6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
          doloribus veritatis a? Nisi nobis nemo hic quam placeat. Modi nesciunt
          delectus dolores itaque non recusandae necessitatibus soluta
          perferendis officiis doloribus!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            anas.laribi95@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +212 6 15 97 96 88
          </li>
          <li>
            <img src={location_icon} alt="" />
            13 rue Edmond Morin, Le Havre, France
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter Your Name"
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="Enter Your Mobile Number"
          />
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            required
            rows="6"></textarea>
          <button type="submit" className="btn dark-btn">
            {" "}
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span> {result} </span>
      </div>
    </div>
  );
};

export default Contact;
