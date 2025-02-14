import React, { useContext } from 'react';
import { Box, Typography, Avatar, Container, Grid } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Stack, ListItem, Scrollbar } from '@mui/material';
// import { useAuth } from './Custom/AuthProvider';
import { AuthContext } from './Custom/AuthProvider';
import DynamicCard from './Custom/DynamicCard';
const cardData = [
    {
        title: 'Employees',
        description: 'This is the description for card 1.',
        imageUrl: './employees.png',
        path: '/employees'
    },
    {
        title: 'Departments',
        description: 'This is the description for card 2.',
        imageUrl: './dep.png',
        path: '/departments'

    },
    {
        title: 'Departments',
        description: 'This is the description for card 2.',
        imageUrl: './dep.png',
        path: '/departments'

    }
    // Add more card data as needed
];
const navConfig = [
    {
        title: 'dashboard',
        path: '/'
    },
    {
        title: 'user',
        path: '/user'
    },
    {
        title: 'product',
        path: '/products'
    },
    {
        title: 'blog',
        path: '/blog'
    },
    {
        title: 'login',
        path: '/login'
    },
    {
        title: 'Not found',
        path: '/404'
    }
];
const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
        {navConfig.map((item) => (
            <ListItem key={item.title} item={item} />
        ))}
    </Stack>
);
const renderContent = (
    // { renderMenu }
    <div>
        {renderMenu}
    </div>
);
function Dashboard() {
    const { user } = useContext(AuthContext);
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box mb={2}>
                <Grid container spacing={2}>
                    {cardData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <DynamicCard
                                title={card.title}
                                description={card.description}
                                imageUrl={card.imageUrl}
                                path={card.path}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box
                sx={{
                    py: 2,
                    px: 2.5,
                    display: 'flex',
                    borderRadius: 1.5,
                    alignItems: 'center',
                    bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
                }}
            >
                <Avatar src="/a" alt="Shrouk" />
                <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle2">HI user? {user.username}</Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Manager
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                my: 3,
                py: 2,
                px: 2.5,
                display: 'flex',
                borderRadius: 1.5,
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),

            }}>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Good Moring,{user.username} 👋
                </Typography>
            </Box>
        </Container >

    )
}

export default Dashboard
