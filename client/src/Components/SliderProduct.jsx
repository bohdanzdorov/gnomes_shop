import { Grid, Box, Typography } from "@mui/material"

export default function SliderProduct(props) {

    return (
            <Grid container spacing={0}
                sx ={{m: 1, minWidth: "100%", maxHeight: "50%"}}
                direction="column"
                alignItems="center"
                justifyContent="center">
                <Grid item>
                    <Box
                        component="img"
                        sx = {{ml: 1, maxWidth: "95%"}}
                        src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png"
                        alt="logo"
                    />
                </Grid>
                <Grid item >
                    <Typography variant="h6" sx={{ mt: 1 }}>
                        {props.item.description}
                    </Typography>
                </Grid>
            </Grid>
    )
}