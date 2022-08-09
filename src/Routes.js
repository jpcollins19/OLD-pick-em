import { withRouter, Route, Switch } from "react-router-dom";
import Spread_Page from "./components/Spread/Spread_Page";
import Rank_Page from "./components/Rank/Rank_Page";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Spread_Page} />
      <Route path="/" component={Rank_Page} />
    </Switch>
  );
};

export default withRouter(Routes);
