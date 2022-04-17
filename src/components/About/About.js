import React from 'react';
import profile from "../../../src/images/profile.jpg";
import "./About.css";
const About = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6">
                <img className='img-fluid' src={profile} alt="" />
                </div>
                <div className="col-md-6 fs-4 d-flex align-items-center">
                    <p>Hello I am Pronob .i am a proffesional Photographer.i am working in this field since 2014.i am a senior photographer.i am so dedicated about photography.
                    Next 1 year i have some plans.i am deeply focousing in this.Next year i have to completed my 2000 happy coustomer.
                    i have to make a big office
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;