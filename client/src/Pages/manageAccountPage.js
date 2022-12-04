import { Typography, Divider, List, Button, ListItem, TextField, Stack, IconButton } from "@mui/material"

import LogoutIcon from '@mui/icons-material/Logout';
import SaveIcon from '@mui/icons-material/Save';
import { useEffect, useState } from "react";

function ManageAccountPage(props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    useEffect(()=>{
        loadAccountInfo()
    }, [])

    function loadAccountInfo(){
        let link = "http://localhost:4000/authentication/find"

        let user_id = sessionStorage.getItem("user_id")

        fetch(link, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                user_id: user_id
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
                setName(data.user.name)
                setEmail(data.user.email)
                setPhone(data.user.phone)
            }
           
        }).catch((err) => {
            console.log(err)
        })
    }

    function changeUserInfo(){
        
    } 

    return (
        <div>
            <Divider>
                <Typography variant="h5">
                    Manage account
                </Typography>
            </Divider>

            <Stack alignItems="center" >
                <List sx={{ ml: 1 }}>
                    <ListItem sx={{ m: 2 }}>
                        <Typography variant="h5" sx={{ mr: 2 }}>
                            Name :
                        </Typography>
                        <TextField
                            id="standard-basic" value={name} onChange={(e, v) => {setName(e.target.value)}} variant="standard"
                        />
                    </ListItem>

                    <ListItem sx={{ m: 2 }}>
                        <Typography variant="h5" sx={{ mr: 2 }}>
                            Email :
                        </Typography>
                        <TextField
                            id="standard-basic" value={email} onChange={(e, v) => {setEmail(e.target.value)}} variant="standard"
                        />
                    </ListItem>

                    <ListItem sx={{ m: 2 }}>
                        <Typography variant="h5" sx={{ mr: 2 }}>
                            Phone :
                        </Typography>
                        <TextField
                            id="standard-basic" value={phone} onChange={(e, v) => {setPhone(e.target.value)}} variant="standard"
                        />
                    </ListItem>

                  
                </List>

            </Stack>


            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <Button variant="outlined" color="success" sx={{ minWidth: "150px", width: "15%", m: 1, mb: 3, p: 1 }}>
                    <IconButton>
                        <Typography sx={{ mr: 1 }}>
                            Save changes
                        </Typography>
                        <SaveIcon />
                    </IconButton>
                </Button>

                <Button variant="contained" color="success" onClick={props.handleUserLogOut} sx={{ minWidth: "150px", width: "15%", m: 1, mb: 3, p: 1 }}>
                    <IconButton>
                        <Typography sx={{ mr: 1 }}>
                            Log out
                        </Typography>
                        <LogoutIcon />
                    </IconButton>
                </Button>
            </div>


        </div>

    )
}

export default ManageAccountPage