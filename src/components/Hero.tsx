import React from "react";
import Wrapper from "./Wrapper";

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <div className="container hero w-container">
        <div className="grid">
          <div
            data-w-id="673470ff-9a0d-c86e-3cd4-f2cde98f7017"
            className="grid-item _85"
          >
            <div className="flex-horizontal center">
              <div className="pin-icon w-embed">
                <svg
                  width="100%"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.23914 10.393V10.3997C5.30542 12.2282 5.93837 13.9911 7.05063 15.4443L7.05702 15.4527C8.38024 17.2197 10.004 18.7402 11.8542 19.9444C11.8759 19.9585 11.8969 19.9734 11.9174 19.9891C11.9389 19.9727 11.961 19.9571 11.9837 19.9424C13.2249 19.1411 14.3693 18.1992 15.3943 17.1353C17.1959 15.2331 18.547 12.9178 18.5957 10.5206V10.4434L18.5957 10.44C18.6082 6.7517 15.6284 3.75158 11.9401 3.73905C8.25233 3.72652 5.25255 6.70544 5.23914 10.393ZM3.23914 10.3878C3.25543 5.59497 7.15401 1.72278 11.9469 1.73906C16.7392 1.75535 20.611 5.653 20.5957 10.4451V10.5304L20.5955 10.5493C20.5366 13.6606 18.8119 16.4364 16.8433 18.5138L16.8377 18.5197C15.7186 19.6818 14.4704 20.7122 13.1175 21.5909C12.4148 22.1492 11.4178 22.1487 10.7156 21.5895C8.68994 20.2632 6.9111 18.5936 5.45917 16.6556C4.09275 14.8685 3.31697 12.7001 3.23973 10.4517C3.23933 10.4402 3.23914 10.4288 3.23914 10.4173L3.23914 10.3878Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.9174 9.07837C11.1106 9.07837 10.4565 9.73242 10.4565 10.5392C10.4565 11.3461 11.1106 12.0001 11.9174 12.0001C12.7242 12.0001 13.3783 11.3461 13.3783 10.5392C13.3783 9.73242 12.7242 9.07837 11.9174 9.07837ZM8.45654 10.5392C8.45654 8.62785 10.006 7.07837 11.9174 7.07837C13.8288 7.07837 15.3783 8.62785 15.3783 10.5392C15.3783 12.4506 13.8288 14.0001 11.9174 14.0001C10.006 14.0001 8.45654 12.4506 8.45654 10.5392Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="grey">
                <p className="paragraph large">Denpasar, BALI</p>
              </div>
            </div>
          </div>
          <div
            data-w-id="364f6bb8-4e42-bc6f-1089-bd2ed857f8a3"
            className="grid-item _60 landscape-100"
          >
            <h1>Film it Reel it</h1>
          </div>
          <div
            data-w-id="b85d4117-5353-31d8-fed2-6e1b1cc5a923"
            className="grid-item _40 landscape-100"
          >
            <div className="hero-description-wrapper">
              <p className="paragraph">
                Focused on providing innovative work consistent with the
                established vision and within budget, Reel It will help you to
                create awesome K-Pop Dance Cover Video and other stuff too.
              </p>
            </div>
          </div>
          <div className="grid-item">
            <div className="hero-image-wrapper">
              <img
                src={process.env.PUBLIC_URL + '/assets/img/hero.webp'}
                loading="lazy"
                sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 91vw, 89vw"
                alt=""
                className="image hero"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
