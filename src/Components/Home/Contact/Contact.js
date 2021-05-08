import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import emailjs from 'emailjs-com';
import { Form,Col,Row, Button } from 'react-bootstrap';
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
        <div className='contact-container' id='contacts'>
            <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-5 contact-form'>
                    <h4>Contact Me</h4>
                    <p><FontAwesomeIcon icon={faGithub} size="2x" /> <a href="https://github.com/Anjuman61">GitHub</a></p>
                    <p><FontAwesomeIcon icon={faLinkedin} color='#4169E1' size="2x" /> <a href="https://www.linkedin.com/in/anjuman-suma-213889a7/">LinkedIn</a></p>
                    <p><FontAwesomeIcon icon={faFacebook} color='#4169E1' size="2x" /> <a href="https://www.facebook.com/anjuman.a.suma">Facebook</a></p>
                    <p> <FontAwesomeIcon icon={faEnvelope} color='#FA8072' /> mosammat.suma@gmail.com</p>
                    <p><FontAwesomeIcon icon={faPhoneAlt} color='#4682B4' />+8801960548541</p>
                        
                  


                </div>
                <div className='col-md-7 email-form mb-3'>
                    <h4>Send Me Email</h4>
                    <Form className="contact-form" onSubmit={sendEmail}>
                    <Form.Group as={Row} controlId="formHorizontalName">
                            <Form.Label column sm={2}>
                                Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="name" placeholder="name" />
                            </Col>
                            </Form.Group>
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
                                    Message
                                </Form.Label>
                                <Col sm={10}>
                                    <textarea name="message" id="" cols="30" rows="5"></textarea>
                                </Col>
                            </Form.Group>
                            <Button variant="info" type="submit">
                             Submit
                             </Button>
 
                          </Form>

                </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;