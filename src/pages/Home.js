import React from "react";
import  Carousel  from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button'
import '../styling/Home.css'

const Home = () => {


  return (
    <div className="home-container">
      <br/>
      <h1 id="home-header">All on Plants!</h1>
       
      <div className="home-button">
        <Button variant="primary" text>Find out more!</Button>{' '}
      </div>
      <br/>

      <Carousel variant="dark">
      <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/plants-index-1558561755.png?crop=0.945xw:0.707xh;0,0.190xh&resize=1200:*"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Small and easy to take care of plants!</h3>
            <p>
              Various houseplants including Aloe Vera, Snake Plant and Pothos
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.sheknows.com/wp-content/uploads/2018/08/xexebnjzcbzgvqio6mci.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Perfect for any house needing more style!</h3>
            <p>Pictured here is Agloenema, Chinese money plant and ZZ plant</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.thompson-morgan.com/static-images/tandm/static-articles/top-ten-houseplants/20211027_tm_wellbeing_collection_houseplant.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>There's a plant for everyone!</h3>
            <p>Aloe, ZZ plant and Peace Lily</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
};

export default Home;
