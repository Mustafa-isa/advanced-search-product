import Category from "./catogery/Catorgery";
import Price from "./Price/Price";
import Colors from "./Color/Color";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "./Sudebar.css";
import { useState } from "react";

const Sidebar = ({ catogeryClick, colorClick, priceClick }) => {
  const [appeaSide, SetAppearSide] = useState(false);
  const setSideBar = () => {
    SetAppearSide(!appeaSide);
  };
  return (
    <>
      {appeaSide && (
        <div
          style={{
            background: "#ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "3px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
          className="bars"
          onClick={setSideBar}
        >
          <MdClose
            style={{
              fontSize: 25,
              color: "#232",
              cursor: "pointer",
            }}
          />
        </div>
      )}
      {!appeaSide && <FaBars className="bars" onClick={setSideBar} />}
      <section className={`sidebar ${appeaSide ? "appear" : ""}`}>
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category catogeryClick={catogeryClick} />

        <Price priceClick={priceClick}/>
        <Colors colorClick={colorClick} />
      </section>
    </>
  );
};

export default Sidebar;
