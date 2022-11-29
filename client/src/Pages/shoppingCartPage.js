
import * as React from 'react';

import { Divider, Typography, Button } from "@mui/material"

import InCartProduct from '../Components/InCartProduct';

function ShoppingCartPage() {

    return (
        <div>

            <Divider>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    Shopping cart
                </Typography>
            </Divider>

            <InCartProduct />
            <InCartProduct />
            <InCartProduct />
            <InCartProduct />

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