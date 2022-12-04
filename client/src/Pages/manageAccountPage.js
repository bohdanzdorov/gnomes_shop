import { Typography, Divider, List, Button, ListItem, TextField, Stack, IconButton } from "@mui/material"

import LogoutIcon from '@mui/icons-material/Logout';

import SaveIcon from '@mui/icons-material/Save';

function ManageAccountPage(props) {
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
                            id="standard-basic" defaultValue="aaa" variant="standard"
                        />
                    </ListItem>

                    <ListItem sx={{ m: 2 }}>
                        <Typography variant="h5" sx={{ mr: 2 }}>
                            Phone :
                        </Typography>
                        <TextField
                            id="standard-basic" defaultValue="+0000000000" variant="standard"
                        />
                    </ListItem>

                    <ListItem sx={{ m: 2 }}>
                        <Typography variant="h5" sx={{ mr: 2 }}>
                            Email :
                        </Typography>
                        <TextField
                            id="standard-basic" defaultValue="aaa@mail.com" variant="standard"
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