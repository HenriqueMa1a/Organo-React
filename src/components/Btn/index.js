import './Btn.css'
const Btn = (props) =>{
    return(
        // <button className="btn">{props.BtnText}</button>
        <button className="btn">{props.children}</button>
    )
}

export default Btn