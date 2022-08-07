import { useEffect, useState } from "react";
import { setAudit, blankAuditFunc } from "../../store";
import Button from "../Misc/Button";
import Error from "../Misc/Error";
import Header from "./Header";
import Row_Cont from "./Row_Cont";
import "./Spread.css";

const Spread_Page = () => {
  const [error, setError] = useState(null);
  const [noInfo, setNoInfo] = useState(true);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const setObj = numbers.reduce((a, number) => {
    const team = {
      name: null,
      spread: null,
      rank: null,
      locked: false,
    };

    a[number] = team;

    return a;
  }, {});

  const onChange = (number, key, answer) => {
    setError(false);

    const lockedStatus = key === "locked" ? setObj[number][key] : null;

    setObj[number][key] =
      key === "name"
        ? answer
        : key === "locked"
        ? !lockedStatus
        : Number(answer);

    setNoInfo(blankAuditFunc(setObj));

    console.log(setObj);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const teams = Object.values(setObj);

      console.log("submit ran");

      teams.forEach((team, idx) => {
        const name = team.name;
        const spread = team.spread;

        if (setAudit([name, spread]))
          return setError(`Invalid name and/or rank in row ${idx + 1}`);
      });

      console.log(error);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={onSubmit} id="submit" className="left box">
      <div className="header">
        <h1 className="white-text">Spread Info</h1>

        <Button text="Submit" form="submit" disabled={noInfo} />

        <Error error={error} />
      </div>
      <div className="full-spread-info-cont">
        <Header />

        <div>
          {numbers.map((number) => (
            <Row_Cont key={number} number={number} onChange={onChange} />
          ))}
        </div>
      </div>
    </form>
  );
};

export default Spread_Page;
