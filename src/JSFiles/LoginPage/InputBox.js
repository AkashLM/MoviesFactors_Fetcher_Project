import '../../CSSFiles/InputBox.css';

const InputBox = (Props) =>{

    const InputType= Props.InputType;
    const PlaceHolder= Props.PlaceHolder;
 
    return(
        <input type={InputType} className='InputBoxContainer' placeholder={PlaceHolder}></input>
    );
}
export default InputBox;