import React from 'react';
import Check from './JSFiles/check';
import NavigationBarHomePage from './JSFiles/NavigationBarHomePage';
import AdvertisePosterHome from './JSFiles/AdvertisePosterHome';
import ProgramContainer from './JSFiles/ProgramContainer';
import './CSSFiles/Vital.css';

const Vital = () =>{
    return(
        <>
        {/* Navigation bar component */}
        <NavigationBarHomePage />

        <div className='wrapper-home'>
                    {/* Advertise poster for home page containing all adds  */}
                    <AdvertisePosterHome />
                    
                    {/* Heading login signup section of home page */}
                    <ProgramContainer />

        </div>


        </>

            

    )

}


export default Vital;