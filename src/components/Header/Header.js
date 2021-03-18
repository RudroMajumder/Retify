import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'
import { Box } from '@material-ui/core';



 
const Header = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        }
      }));
    const navItemStyle={
        color: "white",
        fontSize: "20px",
        paddingRight: "20px",
        textDecoration: "none",
    }
    const loginBtn={
        padding:"5px",
        textDecoration: "none"
    }
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
                    <Toolbar >
                        <Box display='flex' flexGrow={1}>
                            <Link to="/home" style={navItemStyle} ><h1> Rentify </h1></Link>
                        </Box>
                        <Link to="/home" style={navItemStyle}>
                        <Typography color="inherit" variant="h6" >
                            Home
                        </Typography>
                        </Link>
                        <Link to="/destination" style={navItemStyle}>
                        <Typography color="inherit" variant="h6" >
                            Destination
                        </Typography>
                        </Link>
                        <Link to="/blog" style={navItemStyle}>
                        <Typography color="inherit" variant="h6" >
                            Blog
                        </Typography>
                        </Link>
                        <Link to="/contact" style={navItemStyle}>
                        <Typography color="inherit" variant="h6" >
                            Contact
                        </Typography>
                        </Link>
                        <Link to="/login" style={loginBtn}><Button variant="contained" >Login</Button></Link>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}
export default Header;