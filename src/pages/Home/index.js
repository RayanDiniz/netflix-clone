import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuNavegar from "../../components/Menu";
const Home = () => {
    return (
        <>
            <FaHome /> Inicio
            <Link to="/login">Login</Link>
            <MenuNavegar/>
        </>
    )
}
export default Home;