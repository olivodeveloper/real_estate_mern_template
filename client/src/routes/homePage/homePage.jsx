import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Depository Warehouses for Storage </h1>
          <p>
          Easily rent or list warehouses near major ports for secure and convenient storage of import and export merchandise. Connect directly with owners—no intermediaries—ensuring a streamlined process and prime locations for your logistical needs.          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>20+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>7</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>100+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg2.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
