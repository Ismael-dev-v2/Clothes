import "./App.css";
import DemoCarousel from "./components/Carrusel.jsx";
import NavBar from "./components/NavBar.jsx";
import Productos from "./components/Productos";
import Stock from "./components/Productos.jsx";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";

function App() {
  const allCategories = [
    "All",
    ...new Set(Productos.flatMap((producto) => producto.categoria)),
  ];

    // Estado para controlar si el menú está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);

    // Cambia el estado al hacer clic en el ícono de hamburguesa
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

  const [categoria, setCategorias] = useState(allCategories);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterCategory = (category) => {
    setSelectedCategory(category);
  };

  const [isActive, setIsActive] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);

  const addToCart = (id) => {
    let nuevoProducto = Productos.find((producto) => producto.id === id);
    setCarrito([...carrito, nuevoProducto]);
    // Activa la animación para el producto agregado
    setActiveProducts([...activeProducts, id]);

    // Eliminar la clase 'active' después de 1 segundo
    setTimeout(() => {
      setActiveProducts((prevActiveProducts) =>
        prevActiveProducts.filter((productId) => productId !== id)
      );
    }, 1000); // 1 segundo
  };

  const removeFromCart = (id) => {
    const index = carrito.findIndex((producto) => producto.id === id);
    if (index !== -1) {
      const newCarrito = [...carrito];
      newCarrito.splice(index, 1);
      setCarrito(newCarrito);
    }
  };

  const handleClassChange = (e) => {
    const carta = e.target.value;
    setCarrito(carta);
  };

  useEffect(() => {
    const savedProductos = localStorage.getItem("productos");
    if (savedProductos) {
      setCarrito(JSON.parse(savedProductos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(carrito));
  }, [carrito]);

  const filteredProductos =
    selectedCategory === "All"
      ? Productos
      : Productos.filter((producto) =>
          producto.categoria.includes(selectedCategory)
        );

  return (
    <div>
      <header className="navbar">

      <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>

        <NavBar
          categorias={categoria}
          selectedCategory={selectedCategory}
          filterCategory={filterCategory}
          Productos={Productos}
          isOpen={isOpen}
        />
        <button
          className="text-3xl bolsa"
          onClick={() => setIsActive(!isActive)}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </header>
      <div
        onChange={handleClassChange}
        className={`hidden-cart ${isActive ? "active" : ""}`}
      >
        {carrito.map((producto, index) => {
          return (
            <div className="cart" key={`${producto.id}-${index}`}>
              <img src={producto.img} alt="" />
              <div className="">
                <h3>{producto.name}</h3>
                <div></div>
                <div className="cart-product">
                  <h3 className="text-4xl">{producto.precio}</h3>
                  <button
                    className="text-2xl text-red-600"
                    onClick={() => removeFromCart(producto.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <DemoCarousel />
      <Stock
        filteredProductos={filteredProductos}
        addToCart={addToCart}
        activeProducts={activeProducts}
      />
    </div>
  );
}

export default App;
