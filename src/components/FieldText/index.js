import "./FieldText.css";
const FieldText = (props) => {

  const byChanging = (e) => {
    props.modifier(e.target.value)
    console.log(e.target.value)
  };

  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input value={props.fieldValue} onChange={byChanging} required={props.mandatory} placeholder={props.placeholder} />
    </div>
  );
};

export default FieldText;
