import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ImageRoulette(props) {
  const pTextStyling = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff"
  };

  const h3TextStyling = {
    display: "relative",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff"
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kettlebell-coders-images.s3-eu-west-1.amazonaws.com/car/code-gold-2.jpeg"
          alt="computer with code on screen"
        />
        <Carousel.Caption>
          <h3 style={h3TextStyling}>Time to get in shape</h3>

          <p style={pTextStyling}>
            Sick of being unfit? Tired of that dadbod? Time to tighten that
            mumbod?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kettlebell-coders-images.s3-eu-west-1.amazonaws.com/car/kettlebell-orange-1.jpeg"
          alt="man lifting kettlebell"
        />

        <Carousel.Caption>
          <h3 style={h3TextStyling}>Step into the future</h3>

          <p style={pTextStyling}>
            Ready to get mentally sharp? Now is the time to step into the future
            and learn to code
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kettlebell-coders-images.s3-eu-west-1.amazonaws.com/car/code-gold-1.jpeg"
          alt="computer with more code on screen"
        />

        <Carousel.Caption>
          <h3 style={h3TextStyling}>Ready?</h3>

          <p style={pTextStyling}>
            We know you are. It's time to head over to the workout page,
            generate a workout. Get fit and learn to code
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageRoulette;
