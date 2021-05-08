import React from 'react';
import ProjectCard from '../Projectcard/ProjectCard';
import p11 from '../../../images/p-1-1.PNG';
import p12 from '../../../images/p-1-2.PNG';

import p21 from '../../../images/p-2-1.PNG';
import p22 from '../../../images/p-2-2.PNG';
import p31 from '../../../images/p-3-1.PNG';
import p32 from '../../../images/p-3-2.PNG';

import p41 from '../../../images/p4-1.PNG';
import p42 from '../../../images/p-4-2.PNG';
import p51 from '../../../images/p-5-1.PNG';
import p52 from '../../../images/p-5-2.PNG';



const projects=[
    {
        title:'Neat-Cleaning (Cleaning Service Website)',
        line1: 'A complete Website',
        line2:' Different Accessibility for users and Admin.',
        line3:' User can book a service, review Booking List, add review for site.',
        line4:'Admin can add or remove a service, review all users booking list, add an admin.',
        line5:'Both User and Admin need to login first to be able to do any of the operations.',
        method1: 'firebase Authentication',
         method2:'react route', 
         method3:'react private route',
         method4:'CRUD operation', 
         method5:'Stripe payment Method' ,
        image1:p11,
        image2:p12,

        link:'https://neat-clean.web.app/',
    },
    {
        title:'Cakes-N-Shapes (Online shop Website)',
        line1: 'A Full Stack Website',
        line2:' User can order Cakes, review order list, delete items from order list, add new product to server.',
        line3:'User needs to login first to be able to do any of the operations.',
        method1: 'firebase Authentication',
         method2:'react route', 
         method3:'react private route',
         method4:'CRUD operation', 
         image1:p21,
         image2:p22,
        link:'https://cakesnshapes-7eb81.web.app/',
    },
    {
        title:'Safe-Riders (Ride Sharing Service Website)',
        line1: 'Different types of Riders options are available',
        line2:'User needs to sign in first to book any service',
        line3:'for every service minimum four options are available',
        line4:'Admin can add or remove a service, review all users booking list, add an admin.',
        line5:'Both User and Admin need to login first to be able to do any of the operations.',
        method1: 'firebase Authentication',
         method2:'react route', 
         method3:'react private route',
         image1:p31,
         image2:p32,

        link:'https://safe-riders-fce30.web.app/',
    },
    {
        title:'fancy-slider',
        line1: 'User can add pictures for making slide',
        line2:'User can set timer for sliding',
        line2:'User can select or deselect images as per requirement',
        method1: 'basic javaScript',
        image1:p41,
        image2:p42,
        link:'https://anjuman61.github.io/fancy-slider-milstone-6/',
    },
    {
        title:'Cruise-Queen',
        line1: 'User can book ticket',
        line2:'can increase or decrease ticket number',
        method1: 'basic javaScript',
        image1:p51,
        image2:p52,
        link:'https://anjuman61.github.io/Cruise-Queen-Milstone-4/',
    },
]

const Projects = () => {
    return (
        <div className='container' id='projects'>
            <h3>Latest Projects</h3>
            {
                projects.map(pj=><ProjectCard project={pj}></ProjectCard>)
            }
        </div>
    );
};

export default Projects;