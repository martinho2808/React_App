import profile from "./profile.jpg";
export default function Profile(props) {
  return (
    <div>
      <h3>Profile page!</h3>
      <img src={profile} alt="profile" />
    </div>
  );
}
