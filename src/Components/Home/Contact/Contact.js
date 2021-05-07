import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import emailjs from 'emailjs-com';
import { Form,Col,Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rt7m9uy', 'template_uc30vhf', e.target, 'user_MADvlNh2kzWSg1RVhJ739')
            .then((result) => {
                console.log(result.text);
            },
                (error) => {
                    console.log(error.text);
                });
        e.target.reset()
    }
    return (
        <div className='contact-container'>
            <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-5 contact-form'>
                    <h4>Contact Info</h4>
                    <p> <FontAwesomeIcon icon={faEnvelope} /> mosammat.suma@gmail.com</p>
                    <p><FontAwesomeIcon icon={faPhoneAlt} />+8801960548541</p>
                    <div className='d-flex justify-content-center'>
                        <p><FontAwesomeIcon icon={faGithub} size="2x" /> <a href="https://github.com/Anjuman61"></a></p>
                        <p><FontAwesomeIcon icon={faLinkedin} size="2x" /> <a href="https://www.linkedin.com/in/anjuman-suma-213889a7/"></a></p>
                        <p><FontAwesomeIcon icon={faFacebook} size="2x" /> <a href="https://www.facebook.com/anjuman.a.suma"></a></p>
                    </div>


                </div>
                <div className='col-md-7 email-form'>
                    <h4>Send Me Email</h4>
                    <Form className="contact-form" onSubmit={sendEmail}>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Password
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Message
                                </Form.Label>
                                <Col sm={10}>
                                    <textarea name="message" id="" cols="30" rows="5"></textarea>
                                </Col>
                            </Form.Group>
 
                          </Form>

                </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;