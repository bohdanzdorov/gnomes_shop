import {Grid, Box, Typography} from "@mui/material"

export default function Comment(){
    return (
        <Box sx={{ p: 4, pt: 3, width: "75%"}}>
                <Grid container spacing={2}>
                    <Grid item>
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

                    <Grid item>
                        <Typography variant="h6">
                            User name
                        </Typography>
                    </Grid>
                </Grid>

                <Typography variant="h6" sx = {{pt: 1}}>
                    text text text text text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text text text text
                </Typography>
            </Box>

    )
}