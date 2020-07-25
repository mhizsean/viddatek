import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
export class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="header">
                    <h3>Contact Us</h3>
                </div>

                <div className=" container contact-details" style={{marginTop: '50px'}}>

                    <div className="row ">
                        <div className="col-md-6">
                            <div className="details">
                                <p>
                                    address: 112, old road, Amsterdam. <br/>
                                    Email: viddatek@viddatek.com <br/>
                                    phone: +1123 456 244
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <Form  className="container">
                                
                                <Form.Control placeholder="Name" name="name" onChange={this.handleChange} className="shadow-none" /> <br/>
                                <Form.Control placeholder="Phone Number" name="tel" onChange={this.handleChange}  /> <br/>
                                <Form.Control placeholder="Email" name="email" onChange={this.handleChange}  /> <br/>
                                <Form.Control placeholder="Subject" name="subject" onChange={this.handleChange}  /> <br />
                                <Form.Control as="textarea" rows="5"  placeholder="Message" name="message" onChange={this.handleChange} />
                            
                                <br />
                                <button className="contact-btn">SUBMIT</button>
                           
                            </Form>            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
