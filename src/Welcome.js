import wellcome from "./wellcome.jpg";
export default function Welcome(props) {
  return (
    <div>
      <h3>Hello welcome</h3>
      <img src={wellcome} alt="wellcome" />
    </div>
  );
}
