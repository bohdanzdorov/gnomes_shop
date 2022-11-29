import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import MainPage from './Pages/mainPage';
import ProductPage from './Pages/productPage';
import FavoritesPage from './Pages/favoritesPage';
import ManageAccountPage from './Pages/manageAccountPage';

import { Grid, Paper } from '@mui/material';
import BottomInfo from './Components/BottomInfo';
import ShoppingCartPage from './Pages/shoppingCartPage';

function App() {

  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        <ListItem sx={{ pt: 2, pl: 3, pb: 0 }}>
          <ListItemText>AAA</ListItemText>
        </ListItem>
        <ListItem sx={{ pt: 0, pl: 3 }}>
          <ListItemText primaryTypographyProps={{ fontSize: '0.75em' }} >aaa@mail.com</ListItemText>
        </ListItem>
      </List>

      <Divider />

      <List onClick={toggleDrawer(anchor, false)}>
        <ListItem>
          <ListItemButton>
            <ListItemText>Favorites</ListItemText>
            <ListItemIcon sx={{ ml: 1 }}>
              <FavoriteIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemText>Shopping cart</ListItemText>
            <ListItemIcon sx={{ ml: 1 }}>
              <ShoppingCartIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemText>Manage account</ListItemText>
            <ListItemIcon sx={{ ml: 1 }}>
              <PersonIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List onClick={toggleDrawer(anchor, false)}>
        <ListItem>
          <ListItemButton>
            <ListItemText>About us</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemText>Contact us</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="App">
      <AppBar position="sticky" sx={{ width: "100%", height: "10%", p: 1, mb: 5 }}>
        <Toolbar key={"left"} >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon fontSize="large" sx={{ pr: 2, pl: 2 }} />
          </IconButton>

          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>

          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <Box
                component="img"
                sx={{
                  ml: 1,
                  height: "4%",
                  width: "4%",
                }}
                src=""
                alt="logo"
              />
            </Grid>
            <Grid item>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Gnomes shop</Typography>
            </Grid>
          </Grid>

          <IconButton color="inherit" sx={{ pr: 2, pl: 2 }}>
            <FavoriteIcon fontSize="large" />
          </IconButton>

          <IconButton color="inherit" sx={{ pr: 2, pl: 2 }}>
            <ShoppingCartIcon fontSize="large" />
          </IconButton>

          <IconButton color="inherit" sx={{ pr: 2, pl: 2 }}>
            <PersonIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>


      <ManageAccountPage/>

      <BottomInfo/>

    </div>
  );
}

export default App;
