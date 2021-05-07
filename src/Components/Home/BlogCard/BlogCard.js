import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BlogCard = (props) => {
    const {title, description,image}= props.blog;
    return (
        <div className="col-md-6 col-sm-6 text-center mb-5" >
      
        <div>
        <img style={{height: '200px'}} className="img-fluid mb-3" src={image} alt=""/>
        <h6 className='text-info'><strong>{title}</strong></h6>
        <p>{description}</p>
        <button className='btn btn-info'>Read More  <FontAwesomeIcon icon={faArrowRight}/></button>
        
        </div>
    
    </div>
    );
};

export default BlogCard;