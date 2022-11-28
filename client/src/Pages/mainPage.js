import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { Box, Grid, Card, CardContent, CardMedia, Button, Typography, CardActionArea, IconButton } from '@mui/material';

import { useState } from "react"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ProductMiniCard from '../Components/ProductMiniCard';

function MainPage(props) {

    const [products, setProducts] = useState([1, 1, 1, 1, 1, 1, 1, 1])

    return (
        <div>

            <Divider textAlign="center" role="presentation">
                <TextField label="What are you looking for?" color="primary" sx={{ width: "1000px" }} />
            </Divider>

            <Divider sx={{ mt: 2 }} textAlign="center" role="presentation">
                <Typography variant="h4">Top products</Typography>
            </Divider>

            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                {
                    products.map(i => {
                        return <Grid item key={i.name} sx={{ m: 1, width: "20%" }}>
                            <ProductMiniCard />
                        </Grid>

                    })
                }

              
            </Grid>

            <div style={{ display:'flex', justifyContent:'center' }}>
                    <IconButton color="primary">
                        More <ExpandMoreIcon />
                    </IconButton>
            </div>



        </div>
    )
}


export default MainPage