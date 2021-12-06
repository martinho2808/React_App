import ProfileImage from "./profile.jpg";

export default function UserProfile(props) {
  return (
    <div>
      {" "}
      <h2>{props.name} Profile</h2>
      <img src={ProfileImage} alt="profile" />
    </div>
  );
}
