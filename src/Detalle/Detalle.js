
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';


function Detalle(datos) {
	let  params  = useParams();
	
  return (
	<div id="body">
		<img src={datos.mustaches[params.id].src} alt=""/>
		<p>{datos.mustaches[params.id].precio}$</p>
		<p>{datos.mustaches[params.id].descripcion}</p>


			<button><Link to="/gallery">Volver</Link></button>


	
	</div>
  );
}

export default Detalle;
