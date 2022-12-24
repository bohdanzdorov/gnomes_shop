import { Divider, Typography, Grid } from "@mui/material"
import { useState, useEffect } from "react"

import CircularProgress from '@mui/material/CircularProgress';


import ProductMiniCard from "../Components/ProductMiniCard"

function WishlistPage() {


    const [isLoading, setIsLoading] = useState(false)

    const [products, setProducts] = useState([])


    useEffect(() => {
        console.log('i fire once');
        loadWishList()
    }, [])

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
                let buffProducts = []

                for (let i = 0; i < data.whishList.length; i++) {
                    let productLink = `http://localhost:4000/products/getProduct?product_id=${data.whishList[i]}`

                    fetch(productLink, {
                        method: 'GET',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        }

                    }).then((response) => {
                        return response.json()
                    }).then(product => {
                        if (!product.success) {
                            console.log("Failed to load product")
                        } else {
                            buffProducts.push(product.product)
                            if(i == data.whishList.length-1){
                                setProducts(buffProducts)
                                console.log("Buff[rpducts:")
                                console.log(buffProducts)
                            }
                           
                        }

                    }).catch((err) => {
                        console.log(err)
                    })
                }
            }

        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <Divider>
                <Typography variant="h4">
                    Wishlist
                </Typography>
            </Divider>

            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                {
                    products.map(i => {
                        console.log(i.name)
                        return <Grid item key={i.name} sx={{ m: 1, width: "20%", minWidth: "150px" }}>
                            <ProductMiniCard
                                photo={i.photo}
                                name={i.name}
                                price={i.price}
                                description={i.description}
                                product_id = {i.product_id}
                                user_whishList = {[]}
                            />
                        </Grid>
                    })
                }
            </Grid>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {isLoading ? <CircularProgress sx={{ m: 2 }} /> : <p></p>}
            </div>


        </div>
    )
}

export default WishlistPage