import { Typography, Divider, List, Button, ListItem, TextField } from "@mui/material"

function ManageAccountPage() {
    return (
        <div>
            <Divider>
                <Typography variant="h5">
                    Manage account
                </Typography>
            </Divider>

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

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="outlined" color="success" sx={{ width: "15%", m: 1, mb: 3, p: 2 }}>
                    <Typography>
                        Save changes
                    </Typography>
                </Button>
            </div>


        </div>

    )
}

export default ManageAccountPage