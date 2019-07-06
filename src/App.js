import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaProductos from './components/ListaProductos';

function App() {

  const fecha = new Date().getFullYear(); //cuando cambie el año, se cambiará automaticamente

  return ( //fragment es porque estamos pasando varias veces el hijo y traerá error
    <Fragment> 
      <Header
        titulo="Tienda Virtual" //aqui pasas un string 
      />

      <ListaProductos />

      <Footer
        fecha={fecha}  // asi pasas una variable
        />
    </Fragment>
  );
}

export default App;

