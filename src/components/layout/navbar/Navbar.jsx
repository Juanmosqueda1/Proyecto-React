
import "../../../index.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  const Categorias = ["Juegos", "Categorias", "Ofertas"];
  return (
    <>
      <header>
        <nav>
          <h1>CheckPoint</h1>
          <ul>
            {Categorias.map((Categoria, index) => (
              <li key={index} className="Pages">
                <a href={`#${Categoria}`}>{Categoria}</a>
              </li>
            ))}
          </ul>
          <CartWidget />
        </nav>
      </header>
    </>
  );
};
