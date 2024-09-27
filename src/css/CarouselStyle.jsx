import styled from "styled-components";

export const CarouselStyle = styled.section`

.carousel {
    max-width: 800px;
    padding: 110px 0 110px 0;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.carousel-images img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
    transition: opacity 0.3s ease;
    border-radius: 10px;
}

.carousel-images img.inactive {
    display: none;
}

.carousel-images img.active {
    animation-name: fade;
    animation-duration: 1s;
}

@keyframes fade {
  from {
    opacity: .4;
  }
  to {
    opacity: 1;
  }
}

.carousel-controls button {
    position: absolute;
    top: 50%;
    transform: translateY(-80%);
    font-size: 22px;
    border: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 16px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.left-btn {
    left: 0;
}

.right-btn {
    right: 0;
}

.carousel-controls button:hover {
    background-color: rgba(0, 0, 0, 1);
}

.carousel-indicator {
  display: flex;
  align-self: center;
  gap: 10px;
  margin: 16px 0 0 0;
}

.dot {
  width: 15px;
  height: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}

.dot.active {
  background-color: rgba(255, 255, 255, 1);
}

`