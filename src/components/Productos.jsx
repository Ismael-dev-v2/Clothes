import "./Productos.css";

function Stock({addToCart, filteredProductos,}) {


  return (
    <div className="grid">
      {filteredProductos.map((producto) => (
        <div className='flex' key={producto.id}>
          <div className="container">
            <img className='imagen' src={producto.img} alt="" />
            <h3 className='name'>{producto.name}</h3>
            <p className='descripcion'>{producto.descripcion}</p>
            <div className="BT">
              <span className="precio">{producto.precio}</span>
              <button className="button" onClick={() => addToCart(producto.id)}>AGREGAR AL CARRITO</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stock
