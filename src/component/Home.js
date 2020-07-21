import React, { Component } from 'react'
import Hero from './Hero'

export class Home extends Component {
    render() {
        return (
            <div>               
                <Hero/>

                <div className="section-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Home
