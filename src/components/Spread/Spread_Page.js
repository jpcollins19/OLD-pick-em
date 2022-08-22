import { useDispatch } from "react-redux";
import { addTeam } from "../../store";
import Button from "../Misc/Button";
import Header from "./Header";
import Row_Cont from "./Row_Cont";
import "./Spread.css";

const Spread_Page = () => {
  const dispatch = useDispatch();

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const setObj = numbers.reduce((a, number) => {
    const team = {
      name: null,
      spread: null,
      rank: null,
      locked: false,
      lastTeam: false,
    };

    a[number] = team;

    return a;
  }, {});

  const onChange = (number, key, answer) => {
    const lockedStatus = key === "locked" ? setObj[number][key] : null;

    setObj[number][key] =
      key === "rank"
        ? Number(answer)
        : key === "locked"
        ? !lockedStatus
        : key === "lastTeam"
        ? true
        : answer;
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const teams = Object.values(setObj);

      for (let i = 0; i < teams.length; i++) {
        const lastTeam = teams[i].lastTeam;

        dispatch(addTeam(teams[i]));

        if (lastTeam) break;
      }

      evt.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={onSubmit} id="submit" className="left box">
      <div className="header">
        <h1 className="white-text">Spread Info</h1>

        <Button text="Submit" form="submit" />
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
