import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Layout1 =({children}) =>{
    return(
        <>
            <Toolbar/>
            <Box sx={{ bgcolor: 'text.primary', color: 'background.paper' }}>
                <Container maxWidth="sm">
                    {children}
                </Container>
            </Box>

        </>
    )
}

export default Layout1;
