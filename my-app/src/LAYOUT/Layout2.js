import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Layout2 =({children}) =>{
    return(
        <>
            <Toolbar/>
            
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: 'text.secondary', color: 'background.paper' }}>
                    {children}
                </Box>
            </Container>
            

        </>
    )
}

export default Layout2;
