// Profile with nested routing
import { Link, Outlet } from "react-router-dom";

export default function Profile(props) {
  // let match = useRouteMatch();
  return (
    <div>
      <h3>Profile page!</h3>
      <ul>
        <li>
          <Link to={`editProfile`}>Edit profile</Link>
        </li>
        <li>
          <Link to={`seeProfile`}>See Profile</Link>
        </li>
      </ul>
      <div>Click on the items above to find the correct page</div>
      <Outlet />
    </div>
  );
}
