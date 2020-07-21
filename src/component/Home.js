import React, { Component } from 'react'
import Hero from './Hero';
import img1 from '../assets/svg3.png'
import Testimonial from './Testimonial';
import { Card, Button } from 'react-bootstrap';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.jpg';

export class Home extends Component {
    render() {
        return (
            <div>               
                <Hero/>

                <div className="section-one">
                    <div className="container">

                        <h2 className="">over 1000 projects completed</h2>
                        <p className="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid ratione ipsam culpa ullam dolores.</p>

                        <div className="row">
                            <div className="col-md-4 stats">
                                <h1>200+</h1>
                                <p>clients</p>
                            </div>
                            <div className="col-md-4 stats">
                                <h1>$100M+</h1>
                                <p>Revenue</p>
                            </div>
                            <div className="col-md-4 stats">
                                <h1>50+</h1>
                                <p>Employees</p>
                            </div>
                        </div>
                    </div>

                </div>
               
                <div className="section-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 info">
                                <h2>About <span>Us</span></h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt debitis nisi, a numquam voluptatum facilis dolorem consectetur similique velit.</p>
                                <button>About</button>
                            </div>
                            <div className="col-md-6">
                                <img src={img1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 cont">
                                <i class="fab fa-android"></i>
                                <h3>Mobile Apps</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ut tempore ipsam sequi nihil itaque quam eos illum.</p>
                            </div>
                            <div className="col-md-4 col-sm-6 cont">
                            <i class="fas fa-code"></i>
                                <h3>Programming</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ut tempore ipsam sequi nihil itaque quam eos illum.</p>
                            </div>
                            <div className="col-md-4 col-sm-6 cont">
                                <i class="fas fa-database"></i>
                                <h3>Server-side</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ut tempore ipsam sequi nihil itaque quam eos illum.</p>
                            </div>
                            <div className="col-md-4 col-sm-6 cont">
                                <i class="fas fa-bolt"></i>
                                <h3>Fast </h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ut tempore ipsam sequi nihil itaque quam eos illum.</p>
                            </div>
                            <div className="col-md-4 col-sm-6 cont">
                                <i class="fas fa-edit"></i>
                                <h3>Content Creation</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ut tempore ipsam sequi nihil itaque quam eos illum.</p>
                            </div>
                            <div className="col-md-4 col-sm-6 cont">
                                <i class="far fa-lightbulb"></i>
                                <h3>Innovative</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ut tempore ipsam sequi nihil itaque quam eos illum.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio">
                    <div className="container">
                        <h2>PORT<span>FOLIO</span></h2>

                        <div className="row">
                            <div className="col-md-3">
                                <Card>
                                    <Card.Img variant="top" src={p1} />
                                    <Card.Body>
                                        <Card.Title>React App</Card.Title>
                                        <Card.Text>
                                        A react app built to make conversation flows.
                                        </Card.Text>
                                        <Button variant="primary">View</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card>
                                    <Card.Img variant="top" src={p3} />
                                    <Card.Body>
                                        <Card.Title>Node</Card.Title>
                                        <Card.Text>
                                        An app that uses node for its backend
                                        </Card.Text>
                                        <Button variant="primary">View </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card>
                                    <Card.Img variant="top" src={p4} />
                                    <Card.Body>
                                        <Card.Title>Android App</Card.Title>
                                        <Card.Text>
                                            A mobile App to check traffic
                                        </Card.Text>
                                        <Button variant="primary">view</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card>
                                    <Card.Img variant="top" src={p5} />
                                    <Card.Body>
                                        <Card.Title>Firebase</Card.Title>
                                        <Card.Text>
                                        An app using firebase for authentication, hosting and database
                                        </Card.Text>
                                        <Button variant="primary">View App</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <Testimonial />

                <div className="section-three">
                    <div className="container">
                    <h2>Pricing <span>Plan</span></h2>
                        <p>Our Pricing is very affordable as we put everything into consideration and also deliver the best</p>
                        <button>Pricing</button>
                    </div>
                        
                </div>


            </div>
        )
    }
}

export default Home
