import React from "react";
import "./About.css";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";

const About = () => {
  let backImage = {
    backgroundColor: " #25383C",

    height: "85vh",

    backgroundRepeat: "no-repeat"
  };
  return (
    <>
      <div className="about" style={backImage}>
        <TopNavbar />

        <p className="details" style={{ fontWeight: "bold" }}>
          <i>
            It's a "Random Image Generator and Sharing" app. We are providing
            some important features. You can refresh image without page reload,
            you can share image in twitter and you can download the image you
            like.{" "}
          </i>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default About;
