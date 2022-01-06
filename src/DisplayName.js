export function DisplayName(props) {
  return (
    <>
      <p>Hello! {props.name}</p>
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.changeName(e.target.value)}
      />
    </>
  );
}
