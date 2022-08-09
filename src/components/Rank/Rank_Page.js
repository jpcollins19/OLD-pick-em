import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sort, clearTeams, loadTeams } from "../../store";
import Button from "../Misc/Button";
import Column_Cont from "./Column_Cont";
import "./Rank.css";

const Rank_Page = () => {
  const dispatch = useDispatch();

  const teams = useSelector((state) => state.teams);

  const rankInfo = sort(teams);

  // let rankInfo = sort(teams);

  // let counter = teams.length;

  // rankInfo.map((team) => {
  //   team.rank = counter;
  //   counter--;
  //   return team;
  // });

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
