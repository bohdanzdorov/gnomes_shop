import { Card, CardContent, CardMedia, Button, Typography, CardActionArea, IconButton } from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useState } from 'react';

export default function ProductMiniCard(props) {

    const [isFavorite, setIsFavorite] = useState(false)
    const [isInCart, setIsInCart] = useState(false)


    return (
        <div>
            <Card sx={{ minWidth: "100px" }}>
                <CardActionArea>
                    {/* Character's photo */}
                    <CardMedia
                        component="img"
                        maxheight="35%"
                        width="100%"
                        src="https://i1.sndcdn.com/avatars-000434396883-3whssn-t500x500.jpg"
                        alt="profile photo"
                    />

                    {/* Small character's info */}
                    <CardContent sx ={{mb: 0}}>
                        <Typography variant="h5">
                            Name
                        </Typography>
                        <Typography variant="h6">
                            100$
                        </Typography>
                        <Typography variant="h8">
                            text text text text text text text text text text text text text text text text text text te...
                        </Typography>
                    </CardContent>

                    <div style={{ display:'flex', justifyContent:'right' }}>
                        <CardContent sx = {{mt: 0}}>
                            <IconButton color="primary" sx={{ mr: 0 }} >
                                {!isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon/>}
                            </IconButton>

                            <IconButton color="primary" sx={{ mr: 0 }} >
                                {!isInCart ? <AddShoppingCartIcon /> : <ShoppingCartIcon/>}
                            </IconButton>
                        </CardContent>
                    </div>


                </CardActionArea>


            </Card>
        </div>
    )
}