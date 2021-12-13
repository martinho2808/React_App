import { Link, useParams, Outlet } from "react-router-dom";

import wellcome from "../assets/wellcome.jpg";
export default function Welcome(props) {
  return (
    <div>
      <h3>Hello welcome</h3>
      <img src={wellcome} alt="wellcome" />
      <h3>Landing</h3>
      <ul>
        <li>
          <Link to={`user`}>Welcome User</Link>
        </li>
        <li>
          <Link to={`info`}>information</Link>
        </li>
        <li>
          <Link to={`userPage`}>User nested component</Link>
        </li>
        <li>
          <Link to={`infoPage`}>Information nested component</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export function Page() {
  let params = useParams();
  return (
    <div>
      <h2>{params.page}</h2>
    </div>
  );
}

export function DefinedUserPage() {
  return (
    <div>
      <p>user information</p>
      <p>like age </p>
    </div>
  );
}

export function DefinedInfoPage() {
  return (
    <div>
      <p>information</p>
      <p>last orders</p>
      <p>opening times </p>
    </div>
  );
}
