import React from 'react';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Nav></Nav>
            <Projects></Projects>
        </div>
    );
};

export default Home;