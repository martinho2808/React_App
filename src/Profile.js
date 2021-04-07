// Profile with nested routing
import profile from "./profile.jpg";
import {
  useRouteMatch,
  Link,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

// use switch statements here to verify that is being asked for so you can send the correct components.
function Page() {
  let { componentSelected } = useParams();
  return <h5>Requested information: {componentSelected}</h5>;
}

export default function Profile(props) {
  let match = useRouteMatch();
  return (
    <div>
      <h3>Profile page!</h3>
      <ul>
        <li>
          <Link to={`${match.url}/editProfile`}>Edit profile</Link>
        </li>
        <li>
          <Link to={`${match.url}/seeProfile`}>See Profile</Link>
        </li>
      </ul>

      {/* The profile page will now have its own <Switch> with more routes that build on the /profile URL path. Consider the second route below as an 'index' page for all profile components, or the page that will show up if no profile component is chosen.  */}

      <Switch>
        <Route path={`${match.path}/:componentSelected`}>
          <Page />
        </Route>
        <Route path={match.path}>
          <h3>Please select an option?</h3>
          <img src={profile} alt="profile" />
        </Route>
      </Switch>
    </div>
  );
}
