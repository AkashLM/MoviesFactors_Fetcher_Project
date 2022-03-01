import '../CSSFiles/ProgramContainer.css';
// import axios from 'axios';



const ProgramContainer = () =>{

    return(
        <div className='Main-container' >
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
                    <div className='LogIn-Button button-71' onClick={()=>{
                        document.getElementById('Login').style.marginTop="-600px";
                        document.getElementById('SignIn').style.marginTop="-2000px";
                        document.getElementById('Login').style.transition="0.5s";
                        const wap=document.getElementById('wrapper-home').style.filter="blur(5px)";
                        console.log(wap);
                    }}>
                        Login
                    </div>

                </div>

                <div className='SignIn-Section'>
                    <div className='SignIn-Button button-71' onClick={()=>{
                        document.getElementById('Login').style.marginTop="-600px";
                        document.getElementById('SignIn').style.marginTop="-540px";
                        document.getElementById('SignIn').style.transition="0.5s";
                        const wap=document.getElementById('wrapper-home').style.filter="blur(5px)";
                        console.log(wap);
                    }}>
                        Sign in
                    </div>
                <div className="Account-Qsn" 
                        //     onClick={ () =>{
                        // const promise = fetch('https://reqres.in/api/users?page=2');
 
                        // promise.then( (data)=>{
                            
                        //     data.json().then( (data) =>{
                        //         console.log(data.data);
                        //     })
                        // }
                    
                        // );

                        // const promise = axios('https://reqres.in/api/users?page=2');

                        //  promise.then( (data)=>{
                        //     console.log(data.data.data[0].first_name);
                        // }
                    
                        // );
                    
                    
                        // promise.catch( (ErrorType)=>{
                        //     console.log(ErrorType);
                        // }
                    
                        // )



                // }}
                > Don't have any account ?</div>
                </div>
            </div>  

        </div>
    );

}
export default ProgramContainer;