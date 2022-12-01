import { TextField, Grid, Divider, Typography, IconButton } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from "react"

import Carousel from 'react-material-ui-carousel'

import ProductMiniCard from '../Components/ProductMiniCard';
import SliderProduct from '../Components/SliderProduct';

function MainPage(props) {

    const [products, setProducts] = useState([1, 1, 1, 1, 1, 1, 1, 1])

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <div>

            <Divider textAlign="center" role="presentation">
                <TextField label="What are you looking for?" color="primary" sx={{ width: "1000px" }} />
            </Divider>

            <Carousel sx= {{width: "100%"}}>
                {
                    items.map((item, i) => <SliderProduct key={i} item={item} />)
                }
            </Carousel>


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

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton color="primary">
                    More <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}


export default MainPage