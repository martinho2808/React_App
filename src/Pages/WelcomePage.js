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
        <li>
          <Link to={`${url}/userPage`}>User nested component</Link>
        </li>
        <li>
          <Link to={`${url}/infoPage`}>Information nested component</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <p>Click on a button!</p>
        </Route>
        <Route path={`${path}/userPage`} component={definedUserPage} />
        <Route path={`${path}/infoPage`} component={definedInfoPage} />
        <Route path={`${path}/:page`} component={Page} />
        {/* If you're using params then you should put the path below the route handlers that give components  */}
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

function definedUserPage() {
  return (
    <div>
      <p>user information</p>
      <p>like age </p>
    </div>
  );
}

function definedInfoPage() {
  return (
    <div>
      <p>information</p>
      <p>last orders</p>
      <p>opening times </p>
    </div>
  );
}
