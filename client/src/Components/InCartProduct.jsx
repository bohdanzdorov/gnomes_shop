
import { Typography, Grid, Box, IconButton, Paper} from "@mui/material"
import { Stack } from '@mui/system';

import CloseIcon from '@mui/icons-material/Close';

export default function InCartProduct() {

    return (
        <Paper elevation={5} sx={{ mt: 1, mb: 1, p: 3 }}>
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
                            src="https://stickerly.pstatic.net/sticker_pack/Xl46bLGgl6FXjbws4LtozQ/PRVIH6/33/c291c8eb-e1ba-4e41-82c5-12fb9d39cd11.png"
                            alt="logo"
                        />
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{ mt: 1 }}>
                            Product name
                        </Typography>
                    </Grid>
                </Grid>

                <div style={{ display: 'flex', justifyContent: 'right' }}>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="h6" sx={{ pt: "13%" }}>
                            100$
                        </Typography>

                        <IconButton>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                </div>

            </Stack>
        </Paper>
    )

}