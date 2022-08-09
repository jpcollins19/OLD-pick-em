// import { useDispatch } from "react-redux";
// import { addTeam } from "../../store";
// import Button from "../Misc/Button";
import Header from "./Header";
// import Row_Cont from "./Row_Cont";
import "./Rank.css";

const Rank_Page = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="right box">
      <div className="header">
        <h1 className="white-text">Rank Info</h1>
        {/* 
        <Button text="Submit" form="submit" /> */}
      </div>
      <div className="full-spread-info-cont">
        <Header />

        <div>
          {/* {numbers.map((number) => (
            <Row_Cont key={number} number={number} onChange={onChange} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Rank_Page;
