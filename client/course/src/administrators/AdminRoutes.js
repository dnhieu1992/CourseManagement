import { Route, Switch } from "react-router-dom";
import Course from './courses/Course';
import Home from './layout/Home';

function AdminRoutes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/admin/courses" component={Course} />
        </Switch>
    );
}
export default AdminRoutes;