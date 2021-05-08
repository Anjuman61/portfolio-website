import React from 'react';
import Design from '../../../images/website.PNG';
import './HeaderCover.css';

const HeaderCover = () => {
    return (
       <div className='header-cover' id='header'>
           <div className='container'>
           <div className=' row d-flex align-items-center'>
           <div className='col-md-4 header-description'> 
               <h1>Hi! This is Anjuman</h1>
            <p> A passionate individual who always looking forward to do something out of border.I am working as 
            a full stack Web developer  to make sustainable and scalable webpages that can compete with todays Technological world.
             </p>
             <button className='btn btn-primary '> <a className='resume-btn' target="_blank" href="https://drive.google.com/file/d/1J8vqqo9jdr0vCYLfE8U4F612ZqNzxaPg/view?usp=sharing" >SEE MY RESUME </a></button>
             <button className='btn btn-info '><a className='resume-btn' target="_blank" href="https://drive.google.com/uc?export=download&amp;id=1J8vqqo9jdr0vCYLfE8U4F612ZqNzxaPg">DOWNLOAD MY RESUME </a></button>
             </div>
             <div className='col-md-8'>
                 <img  src={Design} className="mt-5 img-fluid header-img" alt=""/>
             </div>
        </div>
           </div>
       </div>
    );
};

export default HeaderCover;