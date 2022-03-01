import React from 'react';
// import Check from './JSFiles/check';
import NavigationBarHomePage from './JSFiles/NavigationBarHomePage';
import AdvertisePosterHome from './JSFiles/AdvertisePosterHome';
import ProgramContainer from './JSFiles/ProgramContainer';
import LoginPage from './JSFiles/LoginPage/LoginPage';
import './CSSFiles/Vital.css';
import SignIn from './JSFiles/SignIn Page/SignInPage'

const Vital = () =>{
    return(
        <div>
        {/* Navigation bar component */}
        <NavigationBarHomePage id="NavigationBarHomePage"></NavigationBarHomePage>

        <div className='wrapper-home' id='wrapper-home'>
                    {/* Advertise poster for home page containing all adds  */}
                    <AdvertisePosterHome />
                    
                    {/* Heading login signup section of home page */}
                    <ProgramContainer />

        </div >
        {/* PopPup box for login of users */}
        <LoginPage></LoginPage>
        <SignIn></SignIn>
        {/* <Check></Check> */}
        </div>


        

            

    )

}


export default Vital;