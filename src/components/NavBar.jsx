const NavBar = ({ Productos, filterCategory, isOpen }) => {
  // Obtener todas las categorías únicas de los productos
  const uniqueCategories = Array.from(
    new Set(Productos.flatMap((producto) => producto.categoria.flat()))
  );

  return (
    <div className={`categoria ${isOpen ? "Desploy" : ""}`}>
      {uniqueCategories.map((categoria) => (
        <button
          type="button"
          className="btn-categoria"
          onClick={() => filterCategory(categoria)}
          key={categoria}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
};

export default NavBar;

