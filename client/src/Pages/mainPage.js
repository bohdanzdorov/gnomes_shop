import { TextField, Grid, Divider, Typography, IconButton, Box} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState, useEffect } from "react"

import Carousel from 'react-material-ui-carousel'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import ProductMiniCard from '../Components/ProductMiniCard';
import SliderProduct from '../Components/SliderProduct';

const settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    variableWidth: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    mobileFirst: true,
    edgeFriction: 0.15,
};

function MainPage(props) {

    const [products, setProducts] = useState([])

    const [productsPage, setProductsPage] = useState(1)

    useEffect(() => {
        getProductsPage()
    }, [productsPage])

    function getProductsPage() {
        let link = `http://localhost:4000/products/getProductsPage?page=${productsPage}&count=4`

        fetch(link, {
            method: 'GET',
            mode: 'cors'
        }).then((response) => {
            return response.json()

        }).then(data => {
            console.log(data.products)
            let buff = products.concat(data.products)
            setProducts(buff)


        }).catch((err) => {
            console.log(err)
        })
    }

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

            <Box sx = {{mt: 1}}>
                <Slider {...settings}>
                    {
                        items.map((item, i) => <SliderProduct sx={{ width: "100%" }} key={i} item={item} />)
                    }
                </Slider>
            </Box>



            <Divider sx={{ mt: 2 }} textAlign="center" role="presentation">
                <Typography variant="h4">Top products</Typography>
            </Divider>

            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                {
                    products.map(i => {
                        return <Grid item key={i.name} sx={{ m: 1, maxWidth: "20%" }}>
                            <ProductMiniCard
                                name={i.name}
                                price={i.price}
                                description={i.description}
                            />
                        </Grid>

                    })
                }
            </Grid>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton color="primary" onClick={() => { setProductsPage(productsPage + 1) }}>
                    More <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}


export default MainPage