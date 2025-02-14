import React, { useState } from 'react';
import axios from 'axios';
import { TextField, InputLabel, Button, Container, Stack, Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddEmployee = ({ fetchItems }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [position, setPosition] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(
            firstName, lastName,
            email, dateOfBirth,
            password, position,
            gender, phone,
            role);
        let name = firstName + ' ' + lastName
        try {
            const response = axios.post('http://127.0.0.1:8000/api/employees',
                {
                    name, email,
                    role, dateOfBirth,
                    password, position,
                    gender, phone

                }
            );
            console.log(response);
            navigate('/employees');

        } catch (error) {
            setError(error)
            console.error('Error details:', error);
        }
    }
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Box m={2}>
                    <Typography variant="body1">Add new employee :</Typography>
                </Box>
                <Box p={3} mb={2} sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                }}>
                    <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                        <Typography pb={2}>Employee Name: </Typography>
                        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="First Name"
                                name="first_name"
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName}
                                fullWidth
                                required
                            />

                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="Last Name"
                                name="last_name"
                                onChange={e => setLastName(e.target.value)}
                                value={lastName}
                                fullWidth
                                required
                            />
                        </Stack>
                        <Typography pb={2}>Employee Email: </Typography>
                        <TextField
                            type="email"
                            variant='outlined'
                            color='secondary'
                            label="Email"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <Typography pb={2}>Employee Phone: </Typography>
                        <TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="Phone"
                            name="phone"
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <Typography pb={2}>Employee Role: </Typography>
                        <Select
                            labelId="role-select-label"
                            id="role-select"
                            name="role"
                            label="role"
                            variant='outlined'
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                            onChange={e => setRole(e.target.value)}

                        >
                            <MenuItem value="male">Employee</MenuItem>
                            <MenuItem value="female">Manager</MenuItem>
                        </Select>
                        <InputLabel id="gender-select-label">Gender</InputLabel>
                        <Select
                            labelId="gender-select-label"
                            id="gender-select"
                            name="gender"
                            label="Gender"
                            variant='outlined'
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                            onChange={e => setGender(e.target.value)}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                        <Typography pb={2}>Employee Position: </Typography>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Position"
                            name="position"
                            onChange={e => setPosition(e.target.value)}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <Typography pb={2}>Employee Password: </Typography>
                        <TextField
                            type="password"
                            variant='outlined'
                            color='secondary'
                            label="Password"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            required
                            fullWidth
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="date"
                            variant='outlined'
                            color='secondary'
                            label="Date of Birth"
                            onChange={e => setDateOfBirth(e.target.value)}
                            value={dateOfBirth}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <Button variant="outlined" color="secondary" type="submit">Add</Button>
                    </form>
                </Box>
            </Container>
        </>
    );
};

export default AddEmployee;
