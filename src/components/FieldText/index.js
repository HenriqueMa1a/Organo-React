import './FieldText.css'

const FielText = (props) => {
  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default FielText;
