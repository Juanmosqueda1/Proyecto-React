import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
<header>
  <nav>
    <div className="logo">
      <Link to="/">CheckPoint</Link>
    </div>
    <div className="links">
      <ul>
        <Link to="/">Todos</Link>
        <Link to="categoria/Mundoabierto">Mundo abierto</Link>
        <Link to="categoria/Carreras">Carreras</Link>
        <Link to="categoria/Shooter">Shooter</Link>
        <Link to="categoria/Aventura">Aventura</Link>
        <Link to="categoria/Cooperativo">Cooperativo</Link>
      </ul>
    </div>
    <div className="cart">
      <CartWidget />
    </div>
  </nav>
</header>
    </>
  );
};
