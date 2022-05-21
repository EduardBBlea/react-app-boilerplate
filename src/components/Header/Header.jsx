import React from 'react';
import { Link } from "react-router-dom";

import ROUTES from '../../constants/routes';

const Header = () => {
    return (
       <React.Fragment>
           <h1>Header</h1>
           <Link to={ROUTES.HOME()}>Home</Link>
           <Link to={ROUTES.ABOUT()}>About</Link>
           <Link to={ROUTES.SOMETHINGS()}>Somethings</Link>
           <Link to={ROUTES.SOMETHING(1)}>Something 1</Link>
       </React.Fragment>
    )
}

export default Header;