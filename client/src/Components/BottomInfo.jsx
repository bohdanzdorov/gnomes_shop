import { Paper, Grid, Typography, Box, Divider } from "@mui/material"
import { Stack } from "@mui/system"

export default function BottomInfo(props) {
  return (
    <Paper sx={{ p: 3, mt: 3 }} elevation={24} >
      <Stack direction="row" spacing={12}>
        <Stack xs = {6}>
          <Typography variant="h5">
            Contacts
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Phone : +000000000
          </Typography>

          <Typography variant="h6" sx={{ mt: 1 }}>
            Email : aaa@mail.com
          </Typography>

          <Typography variant="h6" sx={{ mt: 1 }}>
            Adress : str.aaa, 13, aaa, aaa
          </Typography>
        </Stack>

        <Divider orientation="vertical" flexItem />

        <Stack xs = {3}>
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
        </Stack>

        <Divider orientation="vertical" flexItem />

        <Stack xs = {3}>
          <Grid container spacing={1} alignItems="center" justifyContent="center">
            <Grid item>
              <Box
                component="img"
                sx={{
                  ml: 1,
                  width: "100px",
                }}
                src="https://www.pngall.com/wp-content/uploads/5/Christmas-Gnome-PNG-Clipart.png"
                alt="logo"
              />
            </Grid>
            <Grid item>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Gnomes shop</Typography>
            </Grid>
          </Grid>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Best quality, best prices, best gnomes
          </Typography>
        </Stack>

      </Stack>

    </Paper >
  )
}