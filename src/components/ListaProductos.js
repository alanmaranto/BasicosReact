import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class ListaProductos extends Component {
    state = {
        productos : []
    }

    componentDidMount(){

        this.setState({
            productos : [
                { id : 1, name : 'Camisa ReactJS', precio: 30 },
                { id : 2, name : 'Camisa VueJS', precio: 30 },
                { id : 3, name : 'Camisa AngularJS', precio: 30 },
                { id : 4, name : 'Camisa NodeJS', precio: 30 }
            ]
        })
    }

    componentWillMount(){

    }

    componentWillUpdate(){

    }

    componentWillUnmount(){

    }

    render() { 

        const {productos} = this.state;        

        return (  //map crea un arreglo que va a mandar a llamar a todos los productos que estan en el componente producto. El key es para que react sepa bien en que partelos va a encotntrar junto con el id para que los idetifique
            <Fragment>
                <h1>Lista de Productos</h1> 
                {productos.map(producto => ( 
                    <Producto 
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </Fragment>
         );
    }
}
 
export default ListaProductos;