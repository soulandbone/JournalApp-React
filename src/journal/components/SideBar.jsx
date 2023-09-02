import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';


export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm:0}}}
    >

        <Drawer
            variant='permanent' //temporary if we want
            open={true} // same as just writing open.
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}

            }}

        >
           <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                     Fernando Herrera 
                </Typography>
            </Toolbar> 
            <Divider/>

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'Cillum qui dolor amet sunt anim pariatur magna '}/>
                                </Grid>
                            </ListItemButton>

                        </ListItem>

                    ) )
                }

            </List>

        </Drawer>

    </Box>
    
  );
}
