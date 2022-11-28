import { Divider, Typography, Grid } from "@mui/material"
import { useState } from "react"

import CircularProgress from '@mui/material/CircularProgress';


import ProductMiniCard from "../Components/ProductMiniCard"

function FavoritesPage() {

    const [favorites, setFavorites] = useState([1, 1, 1, 1, 1, 1, 1, 1])

    const [isLoading, setIsLoading] = useState(false)

    return (
        <div>
            <Divider>
                <Typography variant="h4">
                    Favorites
                </Typography>
            </Divider>

            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                {
                    favorites.map(i => {
                        return <Grid item key={i.name} sx={{ m: 1, width: "20%" }}>
                            <ProductMiniCard />
                        </Grid>

                    })
                }
            </Grid>

            <div  style={{ display: 'flex', justifyContent: 'center' }}>
                {isLoading ? <CircularProgress sx = {{m: 2}} /> : <p></p>}
            </div>


        </div>
    )
}

export default FavoritesPage