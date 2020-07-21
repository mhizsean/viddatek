import React, { Component } from 'react';
import img1 from '../assets/svg3.png'

export class Hero extends Component {
    render() {
        return (
            <div className="hero">
           
                <div className="container">
                    <div id="background-wrap">
                        <div className="bubble x1"></div>
                        <div className="bubble x2"></div>
                        <div className="bubble x3"></div>
                        <div className="bubble x4"></div>
                        <div className="bubble x5"></div>
                        <div className="bubble x6"></div>
                        <div className="bubble x7"></div>
                        <div className="bubble x8"></div>
                        <div className="bubble x9"></div>
                        <div className="bubble x10"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>We make things</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum modi, illum dicta ratione error fuga est aperiam sequi quod nisi molestiae tempora! Velit eligendi numquam ratione ut facere neque.</p>
                        </div>
                        <div className="col-md-6 img">
                            <img src={img1} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero
