import { Typography, Grid, Box, IconButton, Paper} from "@mui/material"
import { Stack } from '@mui/system';

import { useState } from "react";

import CloseIcon from '@mui/icons-material/Close';

export default function InCartProduct(props) {

    const[isVisible, setIsVisible] = useState("hidden")

    function removeFromCartClick() {

        let link = "http://localhost:4000/authentication/removeFromFavorites" 
        let method = "DELETE"

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
    }

    return (
        <Paper visibility={isVisible} elevation={5} sx={{ mt: 1, mb: 1, p: 3 }} >
            <Stack direction="row" spacing={0}>
                <Grid container spacing={0}>
                    <Grid item>
                        <Box
                            component="img"
                            sx={{
                                ml: 1,
                                width: "50%",
                                maxWidth: "100px"

                            }}
                            src={props.photo}
                            alt="Product picture"
                        />
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{ mt: 1 }}>
                            {props.name}
                        </Typography>
                    </Grid>
                </Grid>

                <div style={{ display: 'flex', justifyContent: 'right', width: "100%"}}>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="h6" sx={{ pt: "13%" , width : "200%"}}>
                            {props.price} $
                        </Typography>

                        <IconButton onClick={() => props.onClick(props.product_id)}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </div>

            </Stack>
        </Paper>
    )

}