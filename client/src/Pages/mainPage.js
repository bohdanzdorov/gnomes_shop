import { TextField, Grid, Divider, Typography, IconButton, Box } from '@mui/material';

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

    const [wishListProducts, setWishListProducts] = useState([]) 

    const [isMoreProducts, setIsMoreProducts] = useState(true)

    useEffect(() => {
        loadWishList()
    }, [productsPage])

    function loadWishList() {
        let link = `http://localhost:4000/authentication/getWishList?user_id=${sessionStorage.getItem("user_id")}`

        fetch(link, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }

        }).then((response) => {
            return response.json()
        }).then(data => {
            if (!data.success) {
                console.log("Failed to get wishList")
            } else {
                console.log("WishList : " + data.whishList)
                setWishListProducts(data.whishList)
                getProductsPage()
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    function getProductsPage() {
        let link = `http://localhost:4000/products/getProductsPage?page=${productsPage}&count=4`
        
        fetch(link, {
            method: 'GET',
            mode: 'cors'
        }).then((response) => {
            return response.json()

        }).then(data => {

            if (data.success == true) {

                if (data.products.length == 0) {
                    setIsMoreProducts(false)
                } else {
                    console.log(data.products)


                    let buff = products.concat(data.products)
                    setProducts(buff)
                }
            }

        }).catch((err) => {
            console.log(err)
        })
    }

    var items = [
        {
            name: "Random Name #1",
            description: "Product 1"
        },
        {
            name: "Random Name #2",
            description: "Product 2"
        }
    ]

    return (
        <div>

            <p>
                {wishListProducts}
            </p>
            <Divider textAlign="center" role="presentation">
                <TextField label="What are you looking for?" color="primary" sx={{ width: "1000px" }} />
            </Divider>

            <Box sx={{ mt: 1 }}>
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

                        return <Grid item key={i.name} sx={{ m: 1, width: "20%", minWidth: "150px" }}>
                            <ProductMiniCard
                                photo={i.photo}
                                name={i.name}
                                price={i.price}
                                description={i.description}
                                product_id={i.product_id}
                                user_whishList = {wishListProducts}
                            />
                        </Grid>

                    })
                }
            </Grid>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {isMoreProducts ? 
                <IconButton color="primary" onClick={() => { setProductsPage(productsPage + 1) }}>
                    More
                    <ExpandMoreIcon />
                </IconButton> : 
                <Typography>End</Typography>}

            </div>
        </div>
    )
}


export default MainPage