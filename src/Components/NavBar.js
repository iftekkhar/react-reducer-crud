import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static" className="appBar">
                <Container>
                    <Toolbar className="logo">
                        <Typography variant="h6" className="">
                            <NavLink to='/'>React CRUD APP</NavLink>
                        </Typography>
                        <div className="nav">
                            <NavLink to='/'>Posts</NavLink >
                            <NavLink to='/category'>Category</NavLink >

                        </div>

                    </Toolbar>
                </Container>

            </AppBar>

        </div>
    );
};

export default NavBar;