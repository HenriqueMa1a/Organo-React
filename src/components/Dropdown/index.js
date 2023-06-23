import './Dropdown.css'
const Dropdown = (props)=>{
    return(
        <div className='dropdown'>
            <label>{props.label}</label>
            <select>
                {props.teams.map(team => <option key={team}>{team}</option>)}
            </select>
        </div>
    )
}

export default Dropdown