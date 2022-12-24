import { Card, CardContent, CardMedia, Typography, CardActionArea, IconButton} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useState } from 'react';

export default function ProductMiniCard(props) {

    const [isFavorite, setIsFavorite] = useState(false)

    const [isInCart, setIsInCart] = useState(false)

    function favoriteClick(){

        let link
        let method
        if(!isFavorite){
            link = "http://localhost:4000/authentication/addToWhishList"
            method = "POST"
        }else{
            link = "http://localhost:4000/authentication/removeFromWhishlist" 
            method = "DELETE"
        }

        fetch(link, {
          method: method,
            mode: 'cors',
            body: JSON.stringify({
                user_id: sessionStorage.getItem("user_id"),
                product_id: props.product_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then(data => {
            if(!data.success){
               console.log("Failed")
            }else{
                console.log(data)
            }
           
        }).catch((err) => {
            console.log(err)
        })
        console.log(props.product_id)
        setIsFavorite(!isFavorite)
    }

    function cartClick(){
        setIsInCart(!isInCart)
    }

    return (
        <div>
            <Card sx={{ minWidth: "100px" }}>
                <CardActionArea>
                    {/* Character's photo */}
                    <CardMedia
                        component="img"
                        width="100%"
                        src={props.photo}
                        alt="product photo"
                    />

                    {/* Small character's info */}
                    <CardContent sx ={{mb: 0}}>
                        <Typography variant="h5">
                            {props.name}
                        </Typography>
                        <Typography variant="h6">
                            {props.price}
                        </Typography>
                        <Typography variant="h8">
                            {props.description}
                        </Typography>
                    </CardContent>

                    <div style={{ display:'flex', justifyContent:'right' }}>
                        <CardContent sx = {{mt: 0}}>
                            <IconButton onClick={favoriteClick} color="primary" sx={{ mr: 0 }} >
                                {!isFavorite ? <FavoriteBorderIcon fontSize="large"/> : <FavoriteIcon fontSize="large"/>}
                            </IconButton>

                            <IconButton onClick={cartClick} color="primary" sx={{ mr: 0 }} >
                                {!isInCart ? <AddShoppingCartIcon fontSize="large"/> : <ShoppingCartIcon fontSize="large"/>}
                            </IconButton>
                        </CardContent>
                    </div>

                </CardActionArea>

            </Card>
        </div>
    )
}