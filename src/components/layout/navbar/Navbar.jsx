import { CartWidget } from "../../cartWidget/CartWidget";

export const Navbar = () => {
  const Categorias = ["Juegos", "Categorias", "Ofertas", "epico"];
  return (
    <header>
      <nav>
        <h1>logo</h1>
        <ul>
          {Categorias.map((Categoria, index) => (
            <li key={index}>
              <a href={`#${Categoria}`}>{Categoria}</a>
            </li>
          ))}
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};
