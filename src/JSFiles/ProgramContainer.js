import '../CSSFiles/ProgramContainer.css';

const ProgramContainer = () =>{
    return(
        <div className='Main-container'>
            {/* Container for heading */}
            <div className='Main-container-Top'>
                <div className='Main-container-Top-left'>
                    <div className='Share'>
                        Sha<span className='Share-dummy-span'>re</span>
                    </div>
                </div>

                <div className='Main-container-Top-right'>
                    <div className='Main-container-Top-right-Section-A'>
                        <span className='Like-dummy-span'>L</span>ike
                    </div>
                    <div className='Main-container-Top-right-Section-B'>
                        Stream
                    </div>

                </div>

            </div>

            {/* Container for Buttons */}
            <div className='Main-container-Bottom'>
                <div className='LogIn-Section'>
                    <div className='LogIn-Button button-71'>
                        Login
                    </div>

                </div>

                <div className='SignIn-Section'>
                    <div className='SignIn-Button button-71'>
                        Sign in
                    </div>
                <div className="Account-Qsn"> Don't have any account ?</div>
                </div>
            </div>

        </div>
    );

}
export default ProgramContainer;