import InputField from "./InputField";

function AuthForm({ title, fields, onSubmit, submitLabel, className }) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {fields.map((field) => (
          <InputField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={field.value}
            onChange={field.onChange}
          />
        ))}
        <button type="submit">{submitLabel}</button>
      </form>
    </div>
  );
}

export default AuthForm;
