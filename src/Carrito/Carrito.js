import { Link } from 'react-router-dom';
import './css/Carrito.css';

function Carrito(datos) {

	const final = []
	// console.log(datos)
	var precio = 0
	var indice=0

	for (let  mustache of datos.carrito) {
		let i = indice
		final.push(
				<li key={i}>
					<a>
						<img src={mustache.src} alt=""/>
						<p>{mustache.precio}$</p>
						<p>{mustache.cantidad}</p>
						
						<button onClick={()=>{
							datos.sumarcantidad(i)
							localStorage.setItem('Carrito', JSON.stringify(datos.carrito));
						}}>+</button>
						<button onClick={()=>{
							if (mustache.cantidad == 1) {
								datos.quitar(i)
								localStorage.setItem('Carrito', JSON.stringify(datos.carrito));
							}else{
								datos.restarcantidad(i)
								localStorage.setItem('Carrito', JSON.stringify(datos.carrito));
							}
						}}>-</button><br/>
						<button onClick={()=>{
							datos.quitar(i)
							localStorage.setItem('Carrito', JSON.stringify(datos.carrito));
						}}>Eliminar</button>
					</a>
				</li>
			);
			precio += mustache.precio*mustache.cantidad;
			indice++
	}

  return (
	<div id="body">
			<h1><span>carrito</span></h1>
			<h2>Barbas en el carrito: {final.length}</h2>
			<ul class="gallery">{final}</ul>
			<h2>Precio total: {precio}$</h2>

			<button onClick={()=>{
					datos.eliminar()
					localStorage.setItem('Carrito', JSON.stringify(datos.carrito));
				}}>
				Clean
			</button>
				
		</div>
  );
}

export default Carrito;
