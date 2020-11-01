import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to='/'>Posts</Link>
            <Link to='/category'>Category</Link>
        </div>
    );
};

export default NavBar;