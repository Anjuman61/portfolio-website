import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import HeaderCover from '../HeaderCover/HeaderCover';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <HeaderCover/>
            <Skills/>
            <Projects/>
            <Blogs/>
            <Contact/>
            
        </div>
    );
};

export default Home;