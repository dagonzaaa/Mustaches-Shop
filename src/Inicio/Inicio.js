
import './css/Inicio.css';


import thefather from '../images/the-father.jpg'
import theactor from '../images/the-actor.jpg'
import thenerd from '../images/the-nerd.jpg'
import thebeacon from '../images/the-beacon.jpg'

function Inicio() {
  return (
	<div id="main">
		<div id="body">
			<div id="featured">
				<img src={thebeacon} alt=""/>
				<div>
					<h2>the beacon to all mankind</h2>
					<span>Our website templates are created with</span>
					<span>inspiration, checked for quality and originality</span>
					<span>and meticulously sliced and coded.</span>
					<a href="blog-single-post.html" class="more">read more</a>
				</div>
			</div>
			<ul>
				<li>
					<a href="gallery.html">
						<img src={thefather} alt=""/>
						<span>the father</span>
					</a>
				</li>
				<li>
					<a href="gallery.html">
						<img src={theactor} alt=""/>
						<span>the actor</span>
					</a>
				</li>
				<li>
					<a href="gallery.html">
						<img src={thenerd} alt=""/>
						<span>the nerd</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
  );
}

export default Inicio;
