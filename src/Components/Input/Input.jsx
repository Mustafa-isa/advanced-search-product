const Input = ({  value, title, name, color ,onclick }) => {
    return (
      <label className="sidebar-label-container">
        <input type="radio" value={value} name={name} onChange={onclick}/>
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default Input;