const Button = ({value, title ,clicked }) => {
    return (
      <button onClick={clicked} value={value} className="btns">
        {title}
      </button>
    );
  };
  
  export default Button;