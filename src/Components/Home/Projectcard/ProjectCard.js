import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ProjectCard.css'

const ProjectCard = (props) => {
    const { title, line1, line2, line3, line4, line5, method1, method2, method3, method4, method5, image1, image2, image3, link } = props.project;
    console.log(props)
    return (

        <div className='row project-card'>
            <div className='col-md-6 my-3'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 project-img"
                            src={image1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 project-img"
                            src={image2}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                   
                </Carousel>
            </div>
            <div className='col-md-4 projects-description'>
                <h5>{title}</h5>
                <ul>
                    <li>{line1}</li>
                    <li>{line2}</li>
                    <li>{line3}</li>
                    <li>{line4}</li>
                    <li>{line5}</li>

                </ul>
                <button className='btn btn-info'><a className=' project-btn' target="_blank" href={link}> Go To Live Site</a></button>
            </div>

        </div>

    );
};

export default ProjectCard;