import React from "react";
import DaoCards from './DaoCards'
import sampleimage1 from '../molecular.png'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../assets/img/carousel1.svg'
import img2 from '../assets/img/carousel2.svg'
import img3 from '../assets/img/carousel4.svg'


function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-2">

          </div>

          <div className="col-md-8">
            

            <div className="py-5 mt-5">
            <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 className="text-dark">First slide label</h3>
                    <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <div className="pt-5 pl-5">
                    <h3 className="text-dark">Second slide label</h3>
                    <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3 className="text-dark">Third slide label</h3>
                    <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div> 


          </div>

          <div className="col-md-2">
            
          </div>
        </div>
        <div className="py-5">
          <hr className ="pb-4" />
          <div className="text-center">
            <h2 className="">Our funding rounds are governed by a</h2>
            <h1 className="text-primary text-bold pb-2">Decentralized Autonomous Organization</h1> 
            <br />
            <p className="text-mute">To explore, click on "Go to Governance"</p>
            <button className="btn btn-secondary btn-lg">GO TO GOVERNANCE</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary btn-lg">BUY GOVERNANCE TOKENS</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;