import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="top-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h3>Viddatek Inc.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores unde similique reiciendis doloribus eius veniam vel, illo incidunt quae?</p>

                                <i className="fab fa-facebook"></i>
                                
                                <i className="fab fa-twitter"></i>
                                
                                <i className="fab fa-instagram"></i>
                                
                                <i className="fab fa-pinterest"></i>
                            </div>

                            <div className="col-md-4">
                                <h4>Quick Links</h4>
                                <ul className="list-1">
                                    <li>FAQ</li>
                                    <li>Consultancy</li>
                                    <li>Share our interest</li>
                                    <li>Careers</li>
                                    <li>Privacy policy</li>
                                    <li>Terms & Conditions</li>
                                </ul>
                            </div>

                            <div className="col-md-4 subscribe">
                                <h4>Subscribe</h4>
                                <input type="text" placeholder="Enter email"/>
                                <button type="submit">Subscribe</button>
                                
                            </div>

                        </div>
                        
                    </div>
                </div>
                
                <div className="bottom-footer">
                    <p>Copyright © 2020. All Rights Reserved.</p>   
                </div>
            </div>
        )
    }
}

export default Footer
