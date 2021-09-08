const Checkbox = ({ onCheck }) => {
  const onChange = (event) => {
    onCheck(event.target.checked);
  };
  return (
    <>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={(e) => onChange(e)}
      />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </>
  );
};

export default Checkbox;
