import React from 'react';
import './Blogs.css'
import coding from '../../../images/bl-1.PNG';
import tech from '../../../images/bl-2.PNG';
import border from '../../../images/bl-3.PNG';
import BlogCard from '../BlogCard/BlogCard';


const myBlogs=[
    {
        title:'Why you need to learn coding?',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed magnam amet odit minus quam. Veritatis veniam soluta sed cupiditate eius.',
        image:coding,
    },
    {
        title:'Todays Technology',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed magnam amet odit minus quam. Veritatis veniam soluta sed cupiditate eius.',
        image:tech,
    },
    {
        title:'Out of Border',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed magnam amet odit minus quam. Veritatis veniam soluta sed cupiditate eius.',
        image:border,
    },
]

const Blogs = () => {
    return (
        <div className='blogs-container' id='blogs'>
            <h1 className="text-center  text-info my-5">Read My Blogs</h1>
           <div>
           <div className="container">  
                <div className="row ">
                    {
                     myBlogs.map(blog =><BlogCard key={blog.title} blog={blog} />)
                    }
                    
                </div>
            </div>
           </div>  
        </div>
    );
};

export default Blogs;