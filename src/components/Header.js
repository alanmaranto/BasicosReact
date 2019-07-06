import React from 'react';

//(props) es pa que se muestre este prop en pantalla, le aplicamos destructuring y es lo mismo solo  que ahora dice titulo
const Header = ({titulo}) => ( 
    <header>
        <h1>{titulo}</h1>
    </header>
 );

 
export default Header;