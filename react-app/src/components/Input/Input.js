const Input = ({ value, onChange }) => {
    return (
      <input className="w-100 h-250 "
        type="text"
        value={value}
        onChange={onChange} 
        placeholder="Enter something..."
      />
    );
  };
  export default Input;