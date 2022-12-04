import { Divider, TextField, Typography, Button, Link, Paper } from "@mui/material"
import { Stack } from "@mui/system"
import { useState } from "react"

function RegisterPage(props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    function register() {

        let link = "http://localhost:4000/authentication/registration"
        
        fetch(link, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                name: name,
                password: password,   
                email: email,
                phone: phone
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
                sessionStorage.setItem("user_id", data.user.user_id)
                props.handleRegister()
            }
           
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <Stack alignItems={"center"} >
            <Paper sx={{ minWidth: "250px", width: "40%", p: 2 }}>
                <Divider>
                    <Typography variant="h5">Registration</Typography>
                </Divider>

                <Stack sx={{ mt: 2 }} spacing={5} alignItems="center" >
                    <TextField sx={{ minWidth: "250px", width: "25%" }} id="standard-basic" 
                    label="Name" onChange={(e, v) => setName(e.target.value)} variant="standard" />
                    <TextField sx={{ minWidth: "250px", width: "25%" }} id="standard-basic" 
                    label="Password" onChange={(e, v) => setPassword(e.target.value)} variant="standard" />
                    <TextField sx={{ minWidth: "250px", width: "25%" }} id="standard-basic" 
                    label="Email" onChange={(e, v) => setEmail(e.target.value)} variant="standard" />
                    <TextField sx={{ minWidth: "250px", width: "25%" }} id="standard-basic" 
                    label="Phone" onChange={(e, v) => setPhone(e.target.value)} variant="standard" />

                    <Stack direction={"row"} spacing={2}>
                        <Button variant="outlined" color="success" sx={{ p: 1 }}>
                            <Typography>
                                Clear
                            </Typography>
                        </Button>
                        <Button variant="contained" onClick = {register} color="success" sx={{ p: 1 }}>
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