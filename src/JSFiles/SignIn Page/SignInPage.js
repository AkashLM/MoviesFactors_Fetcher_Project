import InputBox from '../../JSFiles/LoginPage/InputBox';
import '../../CSSFiles/SignInPage.css';

const SignIn = () => {
    
    return(
        <>
         <div className="SignIn-Container" id='SignIn'>
            <div className='SignIn-Page-Logo'>
                
            </div>
            <div className='SignIn-User-Input'>
                {/* From the login folder input box design used here */}

                <InputBox InputType="text" PlaceHolder="Email Address"></InputBox>

                <InputBox InputType="password" PlaceHolder="New Username"></InputBox>

                <InputBox InputType="password" PlaceHolder="Password"></InputBox>

                <InputBox InputType="password" PlaceHolder="Confirm Password"></InputBox>

                <div className='SignIn-Section'>
                    <div className='SignIn-Button Login-PopUp'>
                        SignIn
                    </div>
                    

                </div>

                <div className="Account-Qsn-PopUp"> How to use account ? 
                <span className='Cancel' id='Cancel' onClick={()=>{

                document.getElementById('Login').style.marginTop="-2000px";
                document.getElementById('wrapper-home').style.filter="blur(0px)";

                }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cancel</span></div>
                
                
                

            </div>
        </div>
        </>
    )
};

export default SignIn;
