import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import MainLogo from "../assets/images/MainLogo.png";
import Box from "@mui/material/Box";
import {Badge, ListItemIcon, MenuItem} from "@mui/material";
import {StyledRouterLink} from './styledComponents';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useAppSelector} from "../../hooks";

const Navbar = () => {
  
  const cartProducts = useAppSelector(state => state.cart.products)
  
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme => theme.palette.grey["200"],
        p: 1
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box sx={{flexGrow: 1, display: 'flex'}}>
            <StyledRouterLink to={"/"}>
              <img width={80} src={MainLogo} alt="main-logo"/>
            </StyledRouterLink>
          </Box>
          
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem color={"white"}/>}
            spacing={2}
          >
            <MenuItem>
              <StyledRouterLink to={"/"}>Home</StyledRouterLink>
            </MenuItem>
            
            <MenuItem>
              <StyledRouterLink to={"/products"}>Products</StyledRouterLink>
            </MenuItem>
            
            <MenuItem>
              <StyledRouterLink to={"/about-us"}>About us</StyledRouterLink>
            </MenuItem>
            
            <MenuItem>
              <ListItemIcon>
                <Badge
                  badgeContent={cartProducts.length}
                  color="primary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                >
                  <ShoppingCartIcon/>
                </Badge>
              </ListItemIcon>
            </MenuItem>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;