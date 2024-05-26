const InputCustom = ({ placeholder, onChange, onBlur, value }) => {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        className="py-2 px-4 rounded border border-gray-400 hover:border-black focus:border-black focus-visible:outline-none"
      />
    </div>
  );
};

export default InputCustom;
