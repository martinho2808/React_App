import wellcome from "../assets/wellcome.jpg";
export default function Welcome(props) {
  return (
    <div className="pageContainer">
      <h3>Hello welcome</h3>
      <img src={wellcome} alt="wellcome" />
      <div className="boxContainer">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}
