import { withRouter, Route, Switch } from "react-router-dom";
import Spread_Page from "./components/Spread/Spread_Page";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Spread_Page} />
    </Switch>
  );
};

export default withRouter(Routes);
