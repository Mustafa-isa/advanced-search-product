import'./Color.css';
import Input from '../../Components/Input/Input';

const Colors = ({colorClick}) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input  type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
         onclick={colorClick}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
         onclick={colorClick}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
        onclick={colorClick}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
       onclick={colorClick}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
         onclick={colorClick}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;