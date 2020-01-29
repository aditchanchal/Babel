import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar1 = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                HCL-Hackathon: SIMPLE_HARD
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
}
export default NavBar1;