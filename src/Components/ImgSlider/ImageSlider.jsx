import React, { useEffect, useState } from "react";
import "./styles.css";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
const ImageSlider = () => {
  const URL = "https://picsum.photos/v2/list?page=1&limit=10";
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(URL);
        const json = await response.json();
        setLoading(false);
        setImages(json);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };
    fetchImages();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", fontSize: "48px" }}>
        Please Wait!!! Data fetching
      </div>
    );
  }
  const handleLeft = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleRight = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  const handleIndicator = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="mainContainer">
      <div className="container">
        <FaCircleArrowLeft className="arrow arrow-left" onClick={handleLeft} />
        {images?.map((img, index) => (
          <div className="img-container" key={index}>
            <img
              src={img.download_url}
              alt="img"
              className={
                currentSlide === index
                  ? "current-img"
                  : "current-img hide-current-img"
              }
            />
          </div>
        ))}
        <FaCircleArrowRight
          className="arrow arrow-right"
          onClick={handleRight}
        />
        <span className="circle-indicators">
          {images &&
            images?.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => handleIndicator(index)}
              ></button>
            ))}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
