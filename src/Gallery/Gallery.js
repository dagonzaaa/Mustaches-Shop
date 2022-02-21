
import './css/Gallery.css';

import {Link} from 'react-router-dom';


function Gallery(datos) {
	
	const final = []
	var i=0
	var link = "/detalle/"

	for (let  mustache of datos.mustaches) {
		final.push(
				<li key={i} >
					<a>
						<img src={mustache.src} alt=""/>
						<p>{mustache.precio}$</p>
						
						<Link to={link+i} >Detalle</Link>
						<button onClick={()=>{
					
					let comprobante = true
					let indice = 0
					for (let must of datos.carrito) {
						if (must.src == mustache.src){
							datos.sumarcantidad(indice)
							localStorage.setItem('Carrito', JSON.stringify(datos.carrito));
							comprobante = false
						}
						indice++
					}
					if (comprobante) {
						mustache.cantidad++
						datos.anadidoacarrito(mustache);
						localStorage.setItem('Carrito', JSON.stringify(datos.carrito));
					}
					
				}}>Añadir al carrito</button>
					</a>
				</li>
			);
			i++
	}
	return (
		<div id="body">
			<h1><span>gallery</span></h1>
			<ul class="gallery">{final}</ul>
		</div>
	);
}

export default Gallery;