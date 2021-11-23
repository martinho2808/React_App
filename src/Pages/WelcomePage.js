import wellcome from "../assets/wellcome.jpg";
export default function Welcome(props) {
  return (
    <div className="pageContainer">
      <h3>Hello welcome</h3>
      <img src={wellcome} alt="wellcome" />
      <div className="boxContainer">
        <div className="box"><p>1</p></div>
        <div className="box"><p>2</p></div>
        <div className="box"><p>3</p></div>
      </div>
    </div>
  );
}
