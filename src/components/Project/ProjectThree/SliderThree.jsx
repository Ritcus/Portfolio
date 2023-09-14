import React, { useEffect, useState } from "react";
import SliderContent from "../ImageSlider/SliderContent";
import Dots from "../ImageSlider/Dots";
import Arrows from "../ImageSlider/Arrows";
import sliderImageThree from "./sliderImageThree";
import "../ImageSlider/slider.css";
import SliderContentCopy from "../ImageSlider/SliderContentCopy";
import Modal from "react-bootstrap/Modal";

const len = sliderImageThree.length - 1;

export default function SliderOne(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModal, setIsModal] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  function SettingModel() {
    setIsModal(!isModal);
    console.log(isModal);
  }

  return (
    <div className="slider-container">
      <span onClick={() => SettingModel()}>
        <SliderContent
          activeIndex={activeIndex}
          sliderImage={sliderImageThree}
        />{" "}
      </span>
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImageThree}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
      {isModal ? (
        <Example isModal={isModal} ahide={() => setIsModal(false)} />
      ) : null}
    </div>
  );
}

const Example = ({ ahide, isModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <Modal
        show={isModal}
        onHide={ahide}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        centered={true}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Sales Management System
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="slider-container2">
          <SliderContentCopy
            activeIndex={activeIndex}
            sliderImage={sliderImageThree}
          />
          <Arrows
            prevSlide={() =>
              setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
              setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
          />
          <Dots
            activeIndex={activeIndex}
            sliderImage={sliderImageThree}
            onclick={(activeIndex) => setActiveIndex(activeIndex)}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
