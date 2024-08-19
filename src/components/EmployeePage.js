import React from 'react'
import { Box, Typography, Avatar, Container, Grid, Card } from '@mui/material';
import DynamicCard from './Custom/DynamicCard';
function EmployeePage() {
    const cardData = [
        {
            title: 'Shrouk',
            description: 'Software Engineer',
        },
        {
            title: 'Employee ID',
            description: '#23156563232',
        },
        {
            title: 'Departments',
            description: 'Engineering',
        },
        {
            title: 'Joining Date',
            description: '01-Jan-2024',
        }
    ];
    return (
        <div>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', paddingBottom: '10px' }}>
                    Employee Page
                </Typography>
                <Box mb={2}>
                    <Grid container spacing={2}>
                        {cardData.map((card, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <DynamicCard
                                    title={card.title}
                                    description={card.description}
                                    imageUrl={card.imageUrl}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{
                    height: 200,
                    backgroundColor: 'white',
                    boxShadow: 3, // You can change this value from 0 to 24
                    padding: 2,
                    borderRadius: 2,
                }}>
                    Hi
                </Box>
            </Container>
        </div>
    )
}

export default EmployeePage
