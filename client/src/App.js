import { Grid, AppBar, Box, Toolbar, Typography, IconButton, SwipeableDrawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import MainPage from './Pages/mainPage';
import ProductPage from './Pages/productPage';
import WishlistPage from './Pages/wishlistPage';
import ManageAccountPage from './Pages/manageAccountPage';
import ShoppingCartPage from './Pages/shoppingCartPage';

import BottomInfo from './Components/BottomInfo';

import { useState, useEffect } from 'react';
import LogInPage from './Pages/logInPage';
import RegisterPage from './Pages/registerPage';

function App() {

  const [openMenu, setOpenMenu] = useState({ left: false });

  const [page, setPage] = useState("main")

  const [categories, setCategories] = useState([])

  const [name, setName] = useState("Unautharized")
  const [email, setEmail] = useState("-")

  const [isAuthorized, setIsAuthorized] = useState(false)

  const handleUserAuthorization = (e, v) => {

    let link = "http://localhost:4000/authentication/find"

    let user_id = sessionStorage.getItem("user_id")

    fetch(link, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        user_id: user_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json()
    }).then(data => {
      if (data.success) {
        setName(data.user.name)
        setEmail(data.user.email)
        setAccountPageMode(2)
        setIsAuthorized(true)
      }
    }).catch((err) => {
      console.log(err)
    })


  }

  const handleUserLogOut = (e, v) => {
    sessionStorage.setItem("name", "Unautharized")
    sessionStorage.setItem("email", "-")
    sessionStorage.setItem("token", "")
    setName(sessionStorage.getItem("name"))
    setEmail(sessionStorage.getItem("email"))
    setAccountPageMode(0)
    setIsAuthorized(false)
  }



  //0 - logIn, 1 - Registration, 2 - Manage Account
  const [accountPageMode, setAccountPageMode] = useState(0)

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
          <ListItemText>{name}</ListItemText>
        </ListItem>
        <ListItem sx={{ pt: 0, pl: 3 }}>
          <ListItemText primaryTypographyProps={{ fontSize: '0.75em' }} >{email}</ListItemText>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem sx={{ ml: 1 }}>
          <ListItemText>Categories</ListItemText>
        </ListItem>

        {categories.map(i => {
          return <ListItem key={i.name} sx={{ ml: 2 }}>
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

          <IconButton onClick={() => { setPage("wishlist") }} color="inherit" sx={{ pr: 2, pl: 2 }}>
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
          "wishlist": <WishlistPage />,
          "shoppingCart": <ShoppingCartPage />,
          "manageAccount": accountPageMode == 0 ?
            <LogInPage onClick={() => { setAccountPageMode(1) }} handleLogIn={handleUserAuthorization} /> :
            accountPageMode == 1 ?
              <RegisterPage onClick={() => { setAccountPageMode(0) }} handleRegister={handleUserAuthorization} /> :
              <ManageAccountPage handleUserLogOut={handleUserLogOut} />
        }[page]
      }

      <BottomInfo />

    </div>
  );
}

export default App;
