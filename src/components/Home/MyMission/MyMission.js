import React from 'react';
import img2 from "../../../images/slider-2.jpg"
import Footer from '../../Others/Footer/Footer';
const MyMission = () => {
    return (
        <div className="">
            <div className='container'>
            <h2 className='py-5'>My Mission</h2>
            <div className="row">
               <div className="col-md-6 ">
               <img className='img-fluid' src={img2} alt=""  />
               </div>
               <div className="col-md-6 d-flex align-items-center ">
                   <p className='fs-4'>Gleam Photography Mission is making memories telling your stories though quality professional photography tasting for genarations to come.
               i am always committed and motivted effecient and dedicated people with the right attitude who offer consistent profrssional image qualit and excellent customer service. </p>
                </div>
            </div>
            
        </div>
        {
            <Footer></Footer>
        }
        </div>
        
        
    );
};

export default MyMission;