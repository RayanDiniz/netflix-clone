import { Link } from 'react-router-dom';
import "./style.css";
import logo from "../../assets/Netflix_2015_logo.svg"
const Login = () => {
  return (
    <div className="AppLogin">
      <div id="mascara">
        <Link to="/"><img src={logo} width="100" alt="NetFlix" /></Link>
        <div className="Login">
          <h1>Entrar</h1>
          <div className="input">
            <input type="text" placeholder="Email ou número de telefone" />
          </div>
          <div className="input">
            <input type="text" placeholder="Senha" />
          </div>
          <Link to="../browse" className="ButtomEntrar">Entrar</Link>
          <div className="checkbox">
            <span><input type="checkbox" /> Lembre-se de mim</span>
            <span>Precisa de ajuda?</span>
          </div>
          <div className="assine">
            <p>Novo por aqui? Assine agora.</p>
            <span>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;