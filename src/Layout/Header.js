
import './css/Header.css';
import Logo from '../images/logo.jpg'

import {Link} from 'react-router-dom';

function Header() {
  return (
    <div id="header">
		<a href="index.html" class="logo">
			<img src={Logo} alt=""/>
		</a>
		<ul id="navigation">
			<li>
				<a><Link to="/">home</Link></a>
			</li>
			<li>
				<a><Link to="about">about</Link></a>
			</li>
			<li>
				<a><Link to="gallery">gallery</Link></a>				
			</li>
			<li>
				<a><Link to="blog">blog</Link></a>
			</li>
			<li>
				<a><Link to="contact">contact</Link></a>
			</li>
			<li>
				<a><Link to="carrito">🛒</Link></a>
			</li>
		</ul>
	</div>
  );
}

export default Header;
