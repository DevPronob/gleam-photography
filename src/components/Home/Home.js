import React from 'react';
import Hero from './Hero/Hero';
import MyMission from './MyMission/MyMission';
import Services from './Services/Services';
// import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <MyMission></MyMission>
        </div>
    );
};

export default Home;