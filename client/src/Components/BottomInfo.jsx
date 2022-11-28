import {Paper, Grid, Typography, Box} from "@mui/material"

export default function BottomInfo(props){
    return (
        <Paper sx={{ p: 3 }} elevation={24} >
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <Typography variant="h5">
              Contacts
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              Phone : +000000000
            </Typography>

            <Typography variant="h6" sx={{ mt: 1 }}>
              Adress : str.aaa, 13, aaa, aaa
            </Typography>


          </Grid>

          <Grid item xs={4}>
            <Typography variant="h5" >
              Social networks
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              Instagram : @aaa
            </Typography>

            <Typography variant="h6" sx={{ mt: 1 }}>
              Tweeter : @aaa
            </Typography>

            <Typography variant="h6" sx={{ mt: 1 }}>
              Facebook : aaa
            </Typography>
          </Grid>

          <Grid item xs={5}>
            <Grid container spacing={1} alignItems="center" justifyContent="center">
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    ml: 1,
                    height: "4%",
                    width: "4%",
                  }}
                  src=""
                  alt="logo"
                />
              </Grid>
              <Grid item>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Gnomes shop</Typography>
              </Grid>
            </Grid>

            <Typography variant = "h6"  sx = {{mt : 2}}>
              Best quality, best prices, best gnomes
            </Typography>
          </Grid>


        </Grid>
      </Paper>
    )
}