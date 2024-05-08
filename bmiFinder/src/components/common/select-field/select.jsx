import PropTypes from "prop-types";

SelectField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  optionValues: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

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
      {/* <select value={unitOfHeight} onChange={handleHeightUnitChange}> */}
        {/* <option value="cm">cm</option>
        <option value="m">m</option>
        <option value="foot">foot</option> */}
      {/* </select> */}
    </>
  );
}


export default SelectField;
