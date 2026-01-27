export default function Input({
  label,
  type = "text",
  placeholder = "",
  required = false,
  id,
}) {
  return (
    <div className="mb-4">
      {/* Label */}
      <label htmlFor={id} className="text-sm mb-1 block">
        {label}
      </label>

      {/* Input */}
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full p-3 rounded-lg border border-gray-300 text-sm"
      />
    </div>
  );
}
