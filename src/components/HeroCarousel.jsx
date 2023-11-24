import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";
import CarouselSlide from "./CarouselSlide";

import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

const items = [
  { id: 1, component: <CarouselSlide url={'/assets/hero1.jpg'} /> },
  { id: 2, component: <CarouselSlide url={'/assets/hero1.jpg'} /> },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const carouselItemData = items.map((item) => (
    <CarouselItem
      key={item.id}
      onExited={() => setAnimating(false)}
      onExiting={() => setAnimating(true)}
    >
      {item.component}
    </CarouselItem>
  ));

  return (
    <div style={{ display: "block", width: "1920px" }}>
      <Carousel
        previous={previousButton}
        next={nextButton}
        activeIndex={activeIndex}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={(newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          }}
        />
        {carouselItemData}
        <CarouselControl
          directionText="Prev"
          direction="prev"
          onClickHandler={previousButton}
        />
        <CarouselControl
          directionText="Next"
          direction="next"
          onClickHandler={nextButton}
        />
      </Carousel>
    </div>
  );
}export default Hero;
