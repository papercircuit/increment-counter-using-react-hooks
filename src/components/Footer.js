import React from 'react';
import { Link, Typography } from '@mui/material';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#333', padding: '30px 0', color: '#fff' }}>
            <Typography
                variant="overline"
                component="p"
                gutterBottom
                sx={{ textAlign: 'center' }}
            >
                Created by
                <Link
                    href="https://papercircuit.github.io/"
                    sx={{
                        color: '#fff',
                        fontWeight: 'bold',
                        marginLeft: '5px',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                    }}
                >
                    Kenny Johnson
                </Link>
            </Typography>
        </footer>
    );
}

export default Footer;
