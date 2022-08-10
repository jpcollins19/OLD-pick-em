import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sort, clearTeams, loadTeams } from "../../store";
import Button from "../Misc/Button";
import Column_Cont from "./Column_Cont";
import "./Rank.css";

const Rank_Page = () => {
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(true);

  const teams = useSelector((state) => state.teams);
  // const numOfTeams = useSelector((state) => state.numOfTeams);

  // console.log("teams outside setTimeout", teams);
  // console.log("numOfTeams", numOfTeams);

  const rankInfo = sort(teams);

  // const rankInfo = teams.length === numOfTeams && sort(teams);

  // console.log("rankInfo OG", rankInfo);

  // setTimeout(() => {
  //   console.log("teams in setTimeout", teams);
  //   rankInfo = sort(teams);
  //   console.log("rankInfo in setTimeout", rankInfo);
  // }, 1000);

  // setTimeout(() => {
  //   setLoading(false);
  // }, 1100);

  const columns = ["rank", "name"];

  return (
    <div className="right box">
      <div className="header">
        <h1 className="white-text">Rank Info</h1>
        <Button
          text="Clear Teams"
          onClick={() => dispatch(clearTeams(teams))}
        />
      </div>
      <div className="full-rank-info-cont">
        {columns.map((column) => (
          <Column_Cont key={column} rankInfo={rankInfo} column={column} />
        ))}
      </div>
    </div>
  );
};

export default Rank_Page;
