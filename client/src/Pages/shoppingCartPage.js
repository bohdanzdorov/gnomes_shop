import { Divider, Typography, Button, Grid } from "@mui/material"


import InCartProduct from '../Components/InCartProduct';

import { useState, useEffect } from "react"

function ShoppingCartPage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log('i fire once');
        loadInCartProduct();
    }, [])

    function loadInCartProduct() {
        let link = `http://localhost:4000/authentication/getInCart?user_id=${sessionStorage.getItem("user_id")}`

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
                console.log("Failed to get cart products")
            } else {
                let buffProducts = []

                for (let i = 0; i < data.inCart.length; i++) {
                    let productLink = `http://localhost:4000/products/getProduct?product_id=${data.inCart[i]}`

                    fetch(productLink, {
                        method: 'GET',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        }

                    }).then((response) => {
                        return response.json()
                    }).then(product => {
                        console.log(product)
                        if (!product.success) {
                            console.log("Failed to load product")
                        } else {
                            buffProducts.push(product.product)
                            if(i == data.inCart.length-1){
                                setProducts(buffProducts)
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

    const removeCard = product_id => {
        let link = "http://localhost:4000/authentication/removeFromFavorites" 
        let method = "DELETE"

        fetch(link, {
            method: method,
              mode: 'cors',
              body: JSON.stringify({
                  user_id: sessionStorage.getItem("user_id"),
                  product_id: product_id
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
                  setProducts(oldValues => {
                    return oldValues.filter(product => product.product_id !== product_id)
                })
              }
             
          }).catch((err) => {
              console.log(err)
          })

      
    }


    return (
        <div>
            <p>{products.name}</p>

            <Divider>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    Shopping cart
                </Typography>
            </Divider>
                {
                    products.map(i => { return <InCartProduct
                                product_id={i.product_id}
                                photo={i.photo}
                                name={i.name}
                                price={i.price}
                                onClick={removeCard}
                            />
                    })
                }

            <Divider sx={{ m: 3, mb: 0 }} textAlign="right">
                <Typography variant="h5">
                    Total price: 400$
                </Typography>
            </Divider>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <Button variant="contained" color="success" sx={{ width: "15%", height: 1 / 4, m: 3, p: 2}}>
                    <Typography>
                        Order
                    </Typography>
                </Button>

            </div>



        </div >
    )
}

export default ShoppingCartPage