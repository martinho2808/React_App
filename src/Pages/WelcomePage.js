import {
  useRouteMatch,
  useParams,
  Link,
  Route,
  Switch,
} from "react-router-dom";

import wellcome from "../assets/wellcome.jpg";
export default function Welcome(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h3>Hello welcome</h3>
      <img src={wellcome} alt="wellcome" />

      <h3>Landing</h3>
      <ul>
        <li>
          <Link to={`${url}/user`}>Welcome User</Link>
        </li>
        <li>
          <Link to={`${url}/info`}>information</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <p>Click on a button!</p>
        </Route>
        <Route path={`${path}/:page`} component={Page} />
      </Switch>
    </div>
  );
}

function Page() {
  let { page } = useParams();

  return (
    <div>
      <h2>{page}</h2>
    </div>
  );
}
