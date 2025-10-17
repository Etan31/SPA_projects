function InputField({ label, name, type = "text", value, onChange }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>
        {label}
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={label}
          style={{ display: "block", marginTop: "5px" }}
        />
      </label>
    </div>
  );
}

export default InputField;
