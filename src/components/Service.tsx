import React, { useState } from "react";
import Wrapper from "./Wrapper";

const Service: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNextSlide = () => {
    const totalSlides = 3; // Total number of slides
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <Wrapper>
      <div className="container w-container">
        <div className="grid">
          <div className="grid-item">
            <div className="slider-heading">
              <h2>Unleash the experience with our service</h2>
            </div>
            <div className="slider w-slider">
              <div
                className="slider-mask w-slider-mask"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: "transform 0.5s ease",
                }}
              >
                <div className="slider-slide w-slide">
                  <div className="slider-slide-wrapper">
                    <div className="spacer _64"></div>
                    <h4 className="slide-heading">K-Pop Video Services</h4>
                    <div className="spacer _12"></div>
                    <div className="opacity-60">
                      <p className="paragraph small">
                        Our team of talented videographers will capture every
                        beat, every dance move, and every high note, ensuring
                        that your favorite K-Pop moments are immortalized
                        forever. Whether you're a budding idol or a passionate
                        fan, our K-Pop Video Services will make you feel like a
                        superstar.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slider-slide w-slide">
                  <div className="slider-slide-wrapper">
                    <div className="spacer _64"></div>
                    <h4 className="slide-heading">Event Documentation</h4>
                    <div className="spacer _12"></div>
                    <div className="opacity-60">
                      <p className="paragraph small">
                        We believe that memories are meant to be treasured,
                        especially in the events! Reel It will be your personal
                        time-travelers, capturing the electrifying energy, the
                        mind-blowing performances, and the euphoric crowd
                        reactions that make an events truly legendary.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slider-slide w-slide">
                  <div className="slider-slide-wrapper">
                    <div className="spacer _64"></div>
                    <h4 className="slide-heading">Media Partner</h4>
                    <div className="spacer _12"></div>
                    <div className="opacity-60">
                      <p className="paragraph small">
                        Your event deserves the spotlight, and we're here to
                        make sure it shines brightly. From event announcements
                        to lineup reveals, from special features to live
                        coverage, we'll craft attention-grabbing headlines that
                        captivate readers and have them eagerly awaiting the
                        moment your event takes center stage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slider-arrow w-slider-arrow-left"
                onClick={goToPreviousSlide}
              >
                <div className="slider-arrow-icon w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M29.0607 1.93945L3.00006 28.0001L29.0607 54.0608L31.182 51.9395L8.7427 29.5001H55.1214V26.5001H8.7427L31.182 4.06077L29.0607 1.93945Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="slider-arrow right w-slider-arrow-right"
                onClick={goToNextSlide}
              >
                <div className="slider-arrow-icon w-embed">
                  <svg
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M29.0607 1.93945L55.1213 28.0001L29.0607 54.0608L26.9393 51.9395L49.3787 29.5001H3V26.5001H49.3787L26.9393 4.06077L29.0607 1.93945Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="hidden w-slider-nav w-round"></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Service;
