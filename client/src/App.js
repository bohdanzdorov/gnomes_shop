import { Grid, AppBar, Box, Toolbar, Typography, IconButton, SwipeableDrawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import MainPage from './Pages/mainPage';
import ProductPage from './Pages/productPage';
import FavoritesPage from './Pages/favoritesPage';
import ManageAccountPage from './Pages/manageAccountPage';
import ShoppingCartPage from './Pages/shoppingCartPage';

import BottomInfo from './Components/BottomInfo';

import { useState, useEffect } from 'react';

function App() {

  const [openMenu, setOpenMenu] = useState({ left: false });

  const [page, setPage] = useState("main")

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
  }, [])

  function getCategories() {
    let link = "http://localhost:4000/categories/getCategories"

    fetch(link, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json()
    }).then(data => {
      console.log(data.categories)
      setCategories(data.categories)

    }).catch((err) => {
      console.log(err)
    })
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpenMenu({ ...openMenu, [anchor]: open });
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

      <List>
        <ListItem sx ={{ml : 1}}>
          <ListItemText>Categories</ListItemText>
        </ListItem>

        {categories.map(i => {
          return <ListItem key={i.name} sx ={{ml : 2}}>
            <ListItemText>
              {`- ${i.name}`}
            </ListItemText>
          </ListItem>
        })}
      </List>

      <Divider />

      <List onClick={toggleDrawer(anchor, false)}>
        <ListItem>
          <ListItemButton onClick={() => { setPage("favorites") }}>
            <ListItemText>Favorites</ListItemText>
            <ListItemIcon sx={{ ml: 1 }}>
              <FavoriteIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton onClick={() => { setPage("shoppingCart") }}>
            <ListItemText>Shopping cart</ListItemText>
            <ListItemIcon sx={{ ml: 1 }}>
              <ShoppingCartIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton onClick={() => { setPage("manageAccount") }}>
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
            open={openMenu["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>

          <IconButton onClick={() => { setPage("main") }} color="inherit" sx={{ pr: 2, pl: 2 }}>
            <HomeIcon fontSize="large" />
          </IconButton>

          <Grid onClick={() => { setPage("main") }} container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <Box
                component="img"
                sx={{
                  ml: 1,
                  width: "100px",
                }}
                src="https://www.pngall.com/wp-content/uploads/5/Christmas-Gnome-PNG-Clipart.png"
                alt="logo"
              />
            </Grid>
            <Grid item>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Gnomes shop</Typography>
            </Grid>
          </Grid>

          <IconButton onClick={() => { setPage("favorites") }} color="inherit" sx={{ pr: 2, pl: 2 }}>
            <FavoriteIcon fontSize="large" />
          </IconButton>

          <IconButton onClick={() => { setPage("shoppingCart") }} color="inherit" sx={{ pr: 2, pl: 2 }}>
            <ShoppingCartIcon fontSize="large" />
          </IconButton>

          <IconButton onClick={() => { setPage("manageAccount") }} color="inherit" sx={{ pr: 2, pl: 2 }}>
            <PersonIcon fontSize="large" />
          </IconButton>

        </Toolbar>
      </AppBar>

      {
        {
          "main": <MainPage />,
          "favorites": <FavoritesPage />,
          "manageAccount": <ManageAccountPage />,
          "shoppingCart": <ShoppingCartPage />
        }[page]
      }

      <BottomInfo />

    </div>
  );
}

export default App;
