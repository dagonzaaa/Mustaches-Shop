
import './App.css';
import Inicio from './Inicio/Inicio';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Carrito from './Carrito/Carrito';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Detalle from './Detalle/Detalle';

import mustache1 from './images/mustache1.jpg'
import mustache2 from './images/mustache2.jpg'
import mustache3 from './images/mustache3.jpg'
import mustache4 from './images/mustache4.jpg'
import mustache5 from './images/mustache5.jpg'
import mustache6 from './images/mustache6.jpg'
import mustache7 from './images/mustache7.jpg'
import mustache8 from './images/mustache8.jpg'
import mustache9 from './images/mustache9.jpg'


import React, { useState } from 'react';
import { BrowserRouter as Router, 
  Routes,
  Route 
} 
from 'react-router-dom';

function App() {

  const mustach = [
    {'src': mustache1, 'precio':5, 'cantidad': 0, 'descripcion':"Negrito con barba canosa y recortada"},
    {'src': mustache2, 'precio':10, 'cantidad': 0, 'descripcion':"Hombre con sombrero y  barba de 7 dias"},
    {'src': mustache3, 'precio':8, 'cantidad': 0, 'descripcion':"Señor mayor con barba larga y blanca"},
    {'src': mustache4, 'precio':6, 'cantidad': 0, 'descripcion':"Hombre feliz con bigote cortito y canoso"},
    {'src': mustache5, 'precio':7, 'cantidad': 0, 'descripcion':"Hombre con gafas negras y bigote cortito y negro"},
    {'src': mustache6, 'precio':3, 'cantidad': 0, 'descripcion':"Joven con barba de 3 dias"},
    {'src': mustache7, 'precio':5, 'cantidad': 0, 'descripcion':"Señor con bigote estirado, pero corto"},
    {'src': mustache8, 'precio':10, 'cantidad': 0, 'descripcion':"Señor con bigote muy largas y blanco"},
    {'src': mustache9, 'precio':6, 'cantidad': 0, 'descripcion':"Hoven con pelo largo y barba de 2 dias"}
  ]


  if(localStorage.getItem('Carrito')){
    var carrito = JSON.parse(localStorage.getItem('Carrito'))
  }else{
    var carrito = [];
  }

  const [datos, setDatos] = useState({mustaches:mustach,carrito:carrito});

  const sumar = (indice)=>{
    datos.carrito[indice].cantidad++
    setDatos({
      mustaches:mustach,
      carrito:[...datos.carrito]
    })}
    
    const restar = (indice)=>{
      datos.carrito[indice].cantidad--
      setDatos({
        mustaches:mustach,
        carrito:[...datos.carrito]
      })}

  const anadir = (mustache)=>{
    datos.carrito.push(mustache)
    setDatos({
      mustaches:mustach,
      carrito:[ ...datos.carrito],
    })}
  
  const quitar = (indice)=>{
    datos.carrito.splice(indice,1)
    
    setDatos({
      mustaches:mustach,
      carrito:[ ...datos.carrito],
    })
  }

  return (
    <div className="App">
     
      <Router> 
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery mustaches={datos.mustaches} carrito={datos.carrito} sumarcantidad={sumar} anadidoacarrito={anadir}></Gallery>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/detalle/:id" element={<Detalle mustaches={datos.mustaches}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carrito" element={<Carrito carrito={datos.carrito} quitar={quitar} restarcantidad={restar} sumarcantidad={sumar} eliminar={()=>{setDatos({mustaches:mustach,carrito:[]})}}></Carrito>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
