import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../assets/te1.jpg'
import img2 from '../assets/te2.jpg'
import img3 from '../assets/te3.jpg'
import img4 from '../assets/te4.jpg'

export class Testimonial extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container testimo">
        <h2> Our Clients <span>Testimonies</span> </h2>
        <Slider {...settings}>
          <div>
            <img src={img1} alt=""/>
            <h3>Amanda Shane</h3>
            <p>"At first i was not sure if they would deliver, but then i got the finishd job a week earlier. </p>
          </div>
          <div>
            <img src={img3} alt=""/>
            <h3>Steve Jobs</h3>
            <p>"I would recommend them over and over and over again</p>
          </div>
          <div>
            <img src={img2} alt=""/>
            <h3>Miley Ross</h3>
            <p>"If other company could deliver like the way viddatek does...kudos to viddatek</p>
          </div>
          <div>
            <img src={img4} alt=""/>
            <h3>John Doe</h3>
            <p>They give the best idea and help you till you are completely satisfied. of that isn't worth it, then i dont know what is</p>
          </div>
          
         
        </Slider>
      </div>
    );
  }
}

export default Testimonial;