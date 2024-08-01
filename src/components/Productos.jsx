import "./Productos.css";
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Stock({ addToCart, filteredProductos, activeProducts }) {


  return (
    <div className="grid">
      {filteredProductos.map((producto) => (
        <div className="flex" key={producto.id}>
          <div className="container">
            <img className="imagen" src={producto.img} alt="" />
            <h3 className="name">{producto.name}</h3>
            <p className="descripcion">{producto.descripcion}</p>
            <div className="BT">
              <span className="precio">{producto.precio}</span>
              <button className={`button ${activeProducts.includes(producto.id) ? 'active3' : ''}`} onClick={() => addToCart(producto.id)}>
                <span className={`ag ${activeProducts.includes(producto.id) ? 'active2' : ''}`}><FontAwesomeIcon icon={faCartPlus}/></span>
                <span className={`checkmark ${activeProducts.includes(producto.id) ? 'active4' : ''}`}></span>
              </button>
            </div>
          </div>
          {/* <div className={`animacion ${activeProducts.includes(producto.id) ? 'active2' : ''}`}>
              <h2>¡AGREGADO AL CARRITO!</h2>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default Stock;
