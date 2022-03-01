import '../../CSSFiles/LoginPage.css';
import InputBox from './InputBox';

const LoginPage = () =>{
    return(
        <div className="Login-Container" id='Login'>
            <div className='Login-Page-Logo'>
                
            </div>
            <div className='Login-User-Input'>
                <InputBox InputType="text" PlaceHolder="Username Please !"></InputBox>
                <InputBox InputType="password" PlaceHolder="Password"></InputBox>

                <div className='LogIn-Section'>
                    <div className='LogIn-Button Login-PopUp'>
                        Login
                    </div>
                    

                </div>
                <div className="Account-Qsn-PopUp"> Don't have any account ? 
                <span className='Cancel' id='Cancel' onClick={()=>{

                document.getElementById('Login').style.marginTop="-2000px";
                document.getElementById('wrapper-home').style.filter="blur(0px)";


                }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cancel</span></div>
                
                

            </div>
        </div>

    );

}

export default LoginPage;