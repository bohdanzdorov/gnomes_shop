import { Typography, Grid, Box, Divider } from "@mui/material"

import Comment from "../Components/Comment"

function ProductPage(props) {

    return (
        <div>
            <Grid container>
                <Grid item xs={8}>
                    <Box
                        component="img"
                        sx={{
                            ml: 1,
                            width: "50%"
                        }}
                        src=""
                        alt="logo"
                    />
                </Grid>

                <Grid item xs={4}>
                    <Typography variant="h4">
                        Name
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 1 }}>
                        100$
                    </Typography>

                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Category
                    </Typography>
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ p: 3 }}>
                Text text text text text text text text text text text text text text text text text text text text text text text text text
                text text text text text text text text text text text text text text text text text text text text text text text text text
                text text text text text text text text text text text text text text text text text text text text text text text text
                text text text text text text text text text text text text text text text text text text text text text text text text text
            </Typography>

            <Divider textAlign="left"><Typography variant="h5"> Comments</Typography></Divider>
            
            <Comment/>
            <Comment/>

            
        </div>
    )
}

export default ProductPage