import "./Field.css";
const Field = ({
  mandatory,
  label,
  placeholder,
  fieldValue,
  modifier,
  type = "text",
}) => {
  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        value={fieldValue}
        type={type}
        onChange={(e) => modifier(e.target.value)}
        required={mandatory}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Field;
