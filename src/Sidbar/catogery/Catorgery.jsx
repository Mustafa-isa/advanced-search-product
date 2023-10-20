import './catogery.css'
import Input from "../../Components/Input/Input";

function Category({catogeryClick}) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input  type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
      onclick={catogeryClick}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
         onclick={catogeryClick}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
        onclick={catogeryClick}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
         onclick={catogeryClick}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;