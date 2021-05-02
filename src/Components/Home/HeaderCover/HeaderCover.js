import React from 'react';
import Design from '../../../images/website.PNG';
import './HeaderCover.css';

const HeaderCover = () => {
    return (
        <div className=' row d-flex align-items-center  header-cover'>
           <div className='col-md-4 header-description'> 
               <h1>Hi! This is Anjuman</h1>
            <p> A passionate individual who always looking forward to do something out of border.I am working as 
            a full stack Web developer  to make sustainable and scalable webpages that can compete with todays Technological world.
             </p>
             <button className='btn btn-primary'>SEE MY RESUME</button>
             <button className='btn btn-info'>DOWNLOAD MY RESUME</button>
             </div>
             <div className='col-md-8'>
                 <img  src={Design} className="mt-5 img-fluid header-img" alt=""/>
             </div>
        </div>
    );
};

export default HeaderCover;