import { Divider, TextField, Typography, Button, Link, Paper } from "@mui/material"
import { Stack } from "@mui/system"
import { useState } from "react"

function LogInPage(props) {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    function logIn() {

        let link = "http://localhost:4000/authentication/logIn"
        
        fetch(link, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                name: name,
                password: password,        
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
                console.log("Success")
                sessionStorage.setItem("token", data.user.token)
                sessionStorage.setItem("name", data.user.name)
                sessionStorage.setItem("email", data.user.email)
                props.handleLogIn()
            }
           
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <Stack alignItems={"center"} >
            <Paper sx = {{ minWidth: "250px", width: "40%", p : 2}}>

                <Divider>
                    <Typography variant="h5">Log in</Typography>
                </Divider>

                <Stack sx={{ mt: 2 }} spacing={5} alignItems="center" >
                    <TextField sx={{ minWidth: "250px", width: "25%" }} id="standard-basic" 
                    label="Name"  onChange={(e, v) => setName(e.target.value)} variant="standard" />
                    <TextField sx={{ minWidth: "250px", width: "25%" }} id="standard-basic"
                    label="Password" onChange={(e, v) => setPassword(e.target.value)} variant="standard" />

                    <Stack direction={"row"} spacing={2}>
                        <Button variant="outlined" color="success" sx={{ p: 1 }}>
                            <Typography>
                                Clear
                            </Typography>
                        </Button>
                        <Button variant="contained" color="success" onClick={logIn} sx={{ p: 1 }}>
                            <Typography>
                                Log in
                            </Typography>
                        </Button>
                    </Stack>

                    <Typography>
                        Don't have an account yet? <Link onClick={props.onClick}>Registration</Link>
                    </Typography>

                </Stack>
            </Paper>

        </Stack>


    )
}

export default LogInPage