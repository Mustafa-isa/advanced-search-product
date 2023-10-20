import Button from "../components/Button";
import "./Recommendation.css";

const Recommended = ({clicking}) => {
  return (
    <>
      <div className="conatiner-Recomm">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button clicked ={clicking}  value="" title="All Products" />
          <Button clicked ={clicking} value="Nike" title="Nike" />
          <Button clicked ={clicking} value="Adidas" title="Adidas" />
          <Button clicked ={clicking} value="Puma" title="Puma" />
          <Button clicked ={clicking} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
