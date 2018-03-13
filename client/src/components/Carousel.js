import React, { Component } from 'react';


export default class Carousel extends Component {

    render() {

        return (

            <div id="MainPageCarousel" className="carousel slide AllCarousel" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://static1.squarespace.com/static/53164169e4b01396b7545564/t/55c75120e4b0b697c48fe543/1411046082798/2012-H-Moskenes-_0011.jpg?format=1000w" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://static1.squarespace.com/static/53164169e4b01396b7545564/55c75120e4b0b697c48fe545/55c75120e4b0b697c48fe54f/1394846449854/2009-Polar-Norway-01.jpg?format=1000w" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://static1.squarespace.com/static/53164169e4b01396b7545564/55c75120e4b0b697c48fe545/55c75120e4b0b697c48fe54d/1394846455173/2009-Polar-Norway-21.jpg?format=1000w" alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control carousel-control-prev" href="#MainPageCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control carousel-control-next" href="#MainPageCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        )
    }


}


