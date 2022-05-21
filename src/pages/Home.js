import React from "react";
import  Carousel  from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button'

const Home = () => {
  return (
    <div>
      <h1>All on Plants!</h1>
      
      <Button variant="primary">Primary</Button>{' '}

      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.sheknows.com/wp-content/uploads/2018/08/xexebnjzcbzgvqio6mci.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Typical Houseplants page 1</h3>
            <p>Pictured here is Agloenema</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://specials-images.forbesimg.com/imageserve/621b817d4a86784da5949c9c/three-potted-plants-set-up-on-a-small-table/960x0.jpg?cropX1=0&cropX2=2132&cropY1=652&cropY2=2251"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Pictured here is Agloenema</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/plants-index-1558561755.png?crop=0.945xw:0.707xh;0,0.190xh&resize=1200:*"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
