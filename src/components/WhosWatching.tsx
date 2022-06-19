
import "./WhosWatching.css";
import logo from "../assets/Netflix_2015_logo.svg";
const WhosWatching = () => {
  return (
    <>
      <div className="logoNetflix">
        <img src={logo} width="150" alt="Netflix" />
      </div>
      <h1 className="title">Quem está assistindo?</h1>
      <div className="listUserFamily">
        <ul>
          <li>
            <div className="iconUserFamily">foto 3x3</div>
            Prof1
          </li>
          <li>
            <div className="iconUserFamily">foto 3x3</div>
            Prof2
          </li>
          <li>
            <div className="iconUserFamily">foto 3x3</div>
            Prof3
          </li>
          <li>
            <div className="iconUserFamily">foto 3x3</div>
            Prof4
          </li>
        </ul>
      </div>
    </>
  )
}
export default WhosWatching;