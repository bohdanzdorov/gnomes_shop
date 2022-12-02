import { Divider, TextField, Typography, Button, Link, Paper } from "@mui/material"
import { Stack } from "@mui/system"

function RegisterPage(props) {
    return (
        <Stack alignItems={"center"} >
            <Paper sx={{ width: "40%", p: 2 }}>
                <Divider>
                    <Typography variant="h5">Registration</Typography>
                </Divider>

                <Stack sx={{ mt: 2 }} spacing={5} alignItems="center" >
                    <TextField sx={{ minWidth: "250px", width: "25%" }} id="standard-basic" label="Name" variant="standard" />
                    <TextField sx={{ minWidth: "250px", width: "25%" }} id="standard-basic" label="Password" variant="standard" />
                    <TextField sx={{ minWidth: "250px", width: "25%" }} id="standard-basic" label="Email" variant="standard" />

                    <Stack direction={"row"} spacing={2}>
                        <Button variant="outlined" color="success" sx={{ p: 1 }}>
                            <Typography>
                                Clear
                            </Typography>
                        </Button>
                        <Button variant="contained" color="success" sx={{ p: 1 }}>
                            <Typography>
                                Registration
                            </Typography>
                        </Button>
                    </Stack>

                    <Typography>
                        Already have an account? <Link onClick={props.onClick}>Log in</Link>
                    </Typography>

                </Stack>


            </Paper>
        </Stack>
    )
}

export default RegisterPage