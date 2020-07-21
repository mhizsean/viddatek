import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export class Pricing extends Component {
    render() {
        return (
            <div className="price">
                <h3>Flexible <span>Plans</span>  </h3>
                <p className="info">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eligendi pariatur soluta. Deserunt culpa, ea dolore recusandae labore atque soluta, cupiditate temporibus facere quidem nesciunt similique, iste adipisci vitae rem.
                </p>

                <div className="container" style={{marginTop: '50px'}}>
                    <div className="row">
                        
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Card>
                                <Card.Header as="h5">
                                    <div className="web-type">
                                        <Card.Title>Static Website</Card.Title>
                                        <p className="amt">starting from <br/> <span>$50</span></p>
                                        </div>
                                        <p className="desc">
                                        Perfect for when you want to host your personal blog or a hobby side project
                                        </p>
                                </Card.Header>
                                <Card.Body>
                                    
                                    <Card.Title>Includes</Card.Title>
                                    <div className="offers">
                                        <p><i class="fas fa-check"></i>2 months maintenance</p>
                                        <p><i class="fas fa-check"></i>domain</p>
                                        <p><i class="fas fa-check"></i>Hosting</p>
                                        <p><i class="fas fa-check"></i>Support 24/7</p>
                                    </div>
                                    
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Card>
                                <Card.Header as="h5">
                                    <div className="web-type">
                                        <Card.Title>eCommerce </Card.Title>
                                        <p className="amt">starting from <br/> <span>$170</span></p>
                                        </div>
                                        <p className="desc">
                                        You want to take your buisness online, this is the plan for you
                                        </p>
                                </Card.Header>
                                <Card.Body>
                                    
                                    <Card.Title>Includes</Card.Title>
                                    <div className="offers">
                                        <p><i class="fas fa-check"></i>2 months maintenance</p>
                                        <p><i class="fas fa-check"></i>domain</p>
                                        <p><i class="fas fa-check"></i>SEO</p>
                                        <p><i class="fas fa-check"></i>Hosting</p>
                                        <p><i class="fas fa-check"></i>Support 24/7</p>
                                        <p><i class="fas fa-check"></i>Ads</p>
                                        <p><i class="fas fa-check"></i>Safe Payment Gateway</p>

                                    </div>
                                    
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Card>
                                <Card.Header as="h5">
                                    <div className="web-type">
                                        <Card.Title>Blog Website</Card.Title>
                                        <p className="amt">starting from <br/> <span>$150</span></p>
                                        </div>
                                        <p className="desc">
                                        Perfect for when you want to host your personal blog or a hobby side project
                                        </p>
                                </Card.Header>
                                <Card.Body>
                                    
                                    <Card.Title>Includes</Card.Title>
                                    <div className="offers">
                                        <p><i class="fas fa-check"></i>2 months maintenance</p>
                                        <p><i class="fas fa-check"></i>domain</p>
                                        <p><i class="fas fa-check"></i>Hosting</p>
                                        <p><i class="fas fa-check"></i>Support 24/7</p>
                                    </div>
                                    
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <Card>
                                <Card.Header as="h5">
                                    <div className="web-type">
                                        <Card.Title>On Demand Web Apps</Card.Title>
                                        <p className="amt">starting from <br/> <span>$---</span></p>
                                        </div>
                                        <p className="desc">
                                        If you need an app for a specific purpose, this pricing is opened ads it depends on negotiation
                                        </p>
                                </Card.Header>
                                <Card.Body>
                                    
                                    <Card.Title>Includes</Card.Title>
                                    <div className="offers">
                                        <p>As the offers goes</p>
                                    </div>
                                    
                                    
                                </Card.Body>
                            </Card>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing
