import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi"
import { useState } from "react"
import { CarouselStyle } from "../css/CarouselStyle"

function Carousel({ imgs }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex - 1 < 0 ? imgs.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + 1 === imgs.length ? 0 : prevIndex + 1
    )
  }

  return (
    <>
    <CarouselStyle>
    <div className="carousel">
      <div className="carousel-images">
        {imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            className={currentIndex === index ? "active" : "inactive"}
          />
        ))}
      </div>
      <div className="carousel-controls">
        <button className="left-btn" onClick={handlePrevious}>
          <BiSolidChevronLeft />
        </button>
        <button className="right-btn" onClick={handleNext}>
          <BiSolidChevronRight />
        </button>
      </div>
      <div className="carousel-indicator">
        {imgs.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
    </CarouselStyle>
    </>
  )
}

export default Carousel
