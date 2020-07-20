import React, { Component } from 'react';
import img1 from '../assets/svg1.png'

export class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>We make things</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum modi, illum dicta ratione error fuga est aperiam sequi quod nisi molestiae tempora! Velit eligendi numquam ratione ut facere neque.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={img1} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero
