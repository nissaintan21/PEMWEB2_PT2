interface TextareaInputProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  placeholder?: string;
}

const TextareaInput: React.FC<TextareaInputProps> = ({
  label,
  name,
  register,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>

      <textarea
        id={name}
        {...register(name)}
        placeholder={placeholder}
        rows={4}
        className={`border p-2 rounded-2xl focus:outline-blue-800 w-full ${
          error ? "border-red-500" : ""
        }`}
      />

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default TextareaInput;