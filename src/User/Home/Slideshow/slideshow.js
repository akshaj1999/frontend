import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slideshow.css';
function Slideshow({match}) {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          className="item img"
          src={require('./images/slideshow1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Product 1</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item img"
          src={require('./images/slideshow4.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Product 2</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item img"
          src={require('./images/slideshow3.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Product 3</h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;