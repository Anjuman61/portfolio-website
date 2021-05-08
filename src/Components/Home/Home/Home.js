import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footed/Footer';
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
            <Footer/>
            
        </div>
    );
};

export default Home;