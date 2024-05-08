
function SelectField({ value, optionValues, onChange }) {
  return (
    <>
      <select value={value} onChange={onChange}>
        {
          optionValues.map((optionValue) => (
            <option
              key={optionValue}
              value={optionValue}
            >{optionValue}
            </option>
          ))
        }
      </select>
    </>
  );
}


export default SelectField;
