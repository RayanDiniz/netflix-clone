import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/Netflix_2015_logo.svg"
const Home = () => {
  return (
    <div className="AppHome">
      <header>
        <img src={logo} width="100" alt="NetFlix" />
        <Link to="/login">Login</Link>
        <div>
          <h1>Filmes, séries e muito mais. Sem limites.</h1>
          <h2>Assista onde quiser. Cancele quando quiser.</h2>
          <h2>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h2>
          <input type="text" placeholder="Email" />
          <button>Vamos lá</button>
        </div>
      </header>
    </div>
  )
}
export default Home;