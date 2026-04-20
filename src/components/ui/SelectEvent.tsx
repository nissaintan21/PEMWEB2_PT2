interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  label: string;
  name: string;
  options: Option[];
  register: any;
  error?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  options,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>

      <select
        id={name}
        {...register(name)}
        className={`border p-2 rounded-2xl focus:outline-blue-800 ${
          error ? "border-red-500" : ""
        }`}
      >
        <option value="">Pilih kategori event</option>

        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SelectInput;