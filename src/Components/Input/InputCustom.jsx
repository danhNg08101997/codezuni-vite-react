const InputCustom = ({ placeholder, onChange, onBlur, value }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        className="w-full py-2 px-4 rounded border border-gray-400 hover:border-black focus:border-black focus-visible:outline-none"
      />
    </div>
  );
};

export default InputCustom;
