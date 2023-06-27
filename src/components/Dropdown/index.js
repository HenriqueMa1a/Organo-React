import "./Dropdown.css";
const Dropdown = (props) => {
    return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select required={props.mandatory} onChange={e=>props.modifier(e.target.value)} value={props.fieldValue}>
        {props.teams.map((team) => (
          <option key={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
