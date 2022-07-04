import Navbar from "components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;