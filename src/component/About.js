import React, { Component } from 'react'
import img from '../assets/about.jpg';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
export class About extends Component {
    render() {
        return (
            <div className="about-page">

                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-6 brief-info">
                            <h4>About Viddatek</h4>
                            <h2>We are a family of Tech.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, rerum. Voluptas quos asperiores beatae pariatur facere dicta cupiditate rem recusandae laboriosam doloremque veniam!</p>
                            <button>View Our Portfolio</button>
                        </div>
                        
                        <div className="col-md-6 brief-img">
                            <img src={img} alt=""/>
                        </div>
                          
                    </div>

                    <div className="aim">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Our aim</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quod laboriosam mollitia nesciunt asperiores animi odio culpa minima impedit aspernatur! Asperiores dolor in ratione tempore.</p>
                            </div>

                            <div className="col-md-6">
                                <h3>Our vision</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum quos a ipsa! Reprehenderit aliquid natus doloremque dignissimos odio fugiat quae, recusandae aspernatur consequatur quaerat delectus enim provident sapiente voluptas.</p>
                            </div>
                        </div>
                      
                    </div>
                
                    <div className="team">
                        <h2>Meet The <span>Team</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                        <div className="row">
                            <div className="col-md-4">
                                <img src={t1} alt=""/>
                                <div className="team-info">
                                    <h5>CEO/Founder</h5>
                                    <p>Masha Mashal</p>
                                    <i className="fab fa-facebook"></i>
                                    
                                    <i className="fab fa-twitter"></i>
                                    
                                    <i className="fab fa-instagram"></i>
                                </div>
                                
                                
                            </div>
                            <div className="col-md-4">
                                <img src={t2} alt=""/>
                                
                                <div className="team-info">
                                    <h5>Project Manager</h5>
                                    <p>Masha Mashal</p>
                                    <i className="fab fa-facebook"></i>
                                    
                                    <i className="fab fa-twitter"></i>
                                    
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={t3} alt=""/>
                                
                                <div className="team-info">
                                    <h5> CTO</h5>
                                    <p>Masha Mashal</p>
                                    <i className="fab fa-facebook"></i>
                                    
                                    <i className="fab fa-twitter"></i>
                                    
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
