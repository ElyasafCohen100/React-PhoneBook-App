/**********************************************************
 *  🚀 PHONEBOOK APP - Developed by Elyasaf Cohen 🚀
 *  
 *  📌  Created with React, Redux & Material UI
 *  📌  Features:
 *         ✅ Add, Edit & Delete Contacts
 *         ✅ Upload & Save Profile Pictures
 *         ✅ Live Preview & Redux Persistence
 *  
 *  💻 Developed with passion by Elyasaf Cohen 💙🔥
 *********************************************************/


    
// ============ add a new content Component =========== //

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';

import { addNewContactAction } from '../redux/ContactListSlice';
import { Card, CardContent, TextField, Button, Typography, Box, Avatar } from '@mui/material';



// ************************************** the ContactDetailsComp componenta ****************************************//

export default function AddNewContactComp({ onBack }) {

    const dispatch = useDispatch();

    // =========== State to hold new contact data =========== //
    const [newContact, setNewContact] = useState({
        id: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        imageUrl: '' // New field for the contact's image
    });

    // ===== Function to handle input changes and validate using Regex ===== //
    const handleChange = (event) => {

        const { name, value } = event.target;

        const nameRegex = /^[A-Za-zא-ת]*$/;
        const phoneRegex = /^[0-9]*$/;

        if ((name === "firstName" || name === "lastName") && !nameRegex.test(value)) {
            alert("❌ Only letters are allowed in the name field! ❌");
            return;
        }

        if (name === "phoneNumber" && !phoneRegex.test(value)) {
            alert("❌ Only numbers are allowed in the phone number field! ❌");
            return;
        }

        setNewContact({ ...newContact, [name]: value });
    };


    // ===== Function to handle image upload ===== //
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Create temporary preview URL
            setNewContact({ ...newContact, imageUrl });
        }
    };


    // =========== Handle adding the new contact =========== //
    const handleAdd = () => {
        if (newContact.firstName && newContact.lastName && newContact.phoneNumber) {
            dispatch(addNewContactAction({ id: Date.now(), ...newContact })); // Save to Redux
            onBack(); // Return to the contacts list
        } else {
            alert('⚠️ All fields must be filled! ⚠️');
        }
    };


    return (

        <Card sx={{
            maxWidth: 400, mx: "auto", mt: 4, p: 2, borderRadius: 7,
            boxShadow: 20, backgroundColor: "#e8f5e9"
        }}>

            <CardContent>

                <Typography variant="h5" gutterBottom textAlign="center">
                    ➕ Add New Contact ➕
                </Typography>


                {/* =================== Contact Picture Preview =================== */}
                <Box display="flex" flexDirection="column" alignItems="center" position="relative" mb={2}>

                    <Avatar
                        src={newContact.imageUrl || "https://via.placeholder.com/80"}
                        alt={newContact.firstName}
                        sx={{
                            width: 80, height: 80,
                            border: "2px solid #8B4513",
                            cursor: "pointer",
                            position: "relative"
                        }}
                    />


                    {/* ================= Edit Icon over the image ================== */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "10%",
                            right: "5%",
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            borderRadius: "50%",
                            padding: "5px",
                            cursor: "pointer",
                            boxShadow: 3,
                            transform: "translate(50%, -50%)"
                        }}
                    >
                        <EditIcon color="primary" fontSize="small" />
                    </Box>


                    {/* =============== File input for selecting image ================ */}
                    <Box display="flex" justifyContent="flex-end" width="100%" mt={1} sx={{ textAlign: "right", paddingLeft: "1px" }}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ cursor: "pointer" }}
                        />
                    </Box>
                </Box>


                {/* ================== Input Fields =================== */}
                <TextField
                    label="First Name"
                    name="firstName"
                    value={newContact.firstName}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                    size="small"
                    variant="outlined"
                />


                <TextField
                    label="Last Name"
                    name="lastName"
                    value={newContact.lastName}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                    size="small"
                    variant="outlined"
                />


                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={newContact.phoneNumber}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                    size="small"
                    variant="outlined"
                />


                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleAdd}>
                    Add ✅
                </Button>


                <Button variant="contained" fullWidth onClick={onBack}
                    sx={{
                        mt: 3, backgroundColor: "#8B4513",
                    }} >
                    Back 🔙
                </Button>

            </CardContent>

        </Card>
    );
};
