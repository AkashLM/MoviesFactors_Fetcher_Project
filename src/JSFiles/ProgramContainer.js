import '../CSSFiles/ProgramContainer.css';

const ProgramContainer = () =>{
    return(
        <div className='Main-container'>
            {/* Container for heading */}
            <div className='Main-container-Top'>
                <div className='Main-container-Top-left'>
                    <div className='Share'>
                        Share
                    </div>
                </div>

                <div className='Main-container-Top-right'>
                    <div className='Main-container-Top-right-Section-A'>
                        Like
                    </div>
                    <div className='Main-container-Top-right-Section-B'>
                        Stream
                    </div>

                </div>

            </div>

            {/* Container for Buttons */}
            <div className='Main-container-Bottom'>
                <div className='LogIn-Section'>
                    <div className='LogIn-Button'>
                        Login
                    </div>

                </div>

                <div className='SignIn-Section'>
                    <div className='SignIn-Button'>
                        Sign in
                    </div>

                </div>
            </div>

        </div>
    );

}
export default ProgramContainer;