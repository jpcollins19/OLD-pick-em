import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTeams } from "./store";
import Spread_Page from "./components/Spread/Spread_Page";
import Rank_Page from "./components/Rank/Rank_Page";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeams());
  }, []);

  return (
    <div>
      <Spread_Page />
      <Rank_Page />
    </div>
  );
};

export default App;
