export default function EditProfile(props) {
  return (
    <div>
      <h3>Edit this profile</h3>
      <form>
        <label>Name:</label>
        <input name="name" type="text" placeholder="insert name here" />
        <br />
        <label>Email:</label>
        <input name="email" type="text" placeholder="insert email here" />
        <br />
        <input name="submit" value="submit" type="submit" />
      </form>
    </div>
  );
}
