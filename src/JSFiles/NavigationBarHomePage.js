import '../CSSFiles/NavigationBarHomePage.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const NavigationBarHomePage = () =>{
    return(
        <div className='Nav-container'>
            <div className='Logo-Home'>

            </div>
            <div className="Logo-Name">
               <span className='Logo-Name-dummy-span-1'>M</span>ovie<span className='Logo-Name-dummy-span-2'>F</span>actor$
            </div>

            <div className='Menu-Home'>
            <i class="fa-duotone fa-bars"></i>
            </div>
        </div>

    )

}

export default NavigationBarHomePage;