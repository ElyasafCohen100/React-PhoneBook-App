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



// =========== Contact Details Component =========== //

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';

import { editContactAction, deleteContactAction } from '../redux/ContactListSlice';
import { Avatar, Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';



// ************************************** the ContactDetailsComp componenta ****************************************//

export default function ContactDetailsComp({ contact, onBack }) {

    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [updatedContact, setUpdatedContact] = useState(contact);

    // ===== Function to handle input changes and validate using Regex ===== //
    const handleEditChange = (event) => {
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

        setUpdatedContact({ ...updatedContact, [name]: value });
    };


    // ===== Function to handle image upload ===== //
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUpdatedContact({ ...updatedContact, imageUrl });
        }
    };


    // ===== Save updated contact to Redux ===== //
    const handleSave = () => {
        dispatch(editContactAction({ id: contact.id, updatedContact }));
        setIsEditing(false);
    };


    return (

        <Card sx={{
            maxWidth: 400, mx: "auto", mt: 4, borderRadius: 7,
            boxShadow: 20, p: 2, backgroundColor: "#fff3e0"
        }}>

            <CardContent>

                {/* =================== Contact Picture Section ================ */}

                <Box display="flex" flexDirection="column" alignItems="center" position="relative" mb={2}>

                    {/* ============ Avatar (Profile Picture) ============ */}
                    <Avatar
                        src={updatedContact.imageUrl}
                        alt={updatedContact.firstName}
                        sx={{
                            width: 80, height: 80,
                            border: "2px solid #8B4513",
                            cursor: isEditing ? "pointer" : "default",
                            position: "relative"
                        }}
                    />

                    {/* ============== Edit Icon (Only appears in edit mode) ============= */}
                    {isEditing && (
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
                    )}


                    {/* ============= File input field - Only appears in edit mode ============ */}
                    {isEditing && (
                        <Box display="flex" flexDirection="column" alignItems="center" width="100%" mt={1}

                            sx={{
                                textAlign: "right", paddingLeft: "90px"
                            }}>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ cursor: "pointer", textAlign: "center", display: "block", margin: "auto" }}
                            />
                        </Box>
                    )}
                </Box>


                <Typography variant="h5" gutterBottom textAlign="center">
                    📋 Contact Details 📋
                </Typography>


                <TextField
                    label="First Name"
                    name="firstName"
                    value={updatedContact.firstName}
                    onChange={handleEditChange}
                    fullWidth
                    margin="dense"
                    size="small"
                    variant="outlined"
                    disabled={!isEditing}
                />


                <TextField
                    label="Last Name"
                    name="lastName"
                    value={updatedContact.lastName}
                    onChange={handleEditChange}
                    fullWidth
                    margin="dense"
                    size="small"
                    variant="outlined"
                    disabled={!isEditing}
                />


                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={updatedContact.phoneNumber}
                    onChange={handleEditChange}
                    fullWidth
                    margin="dense"
                    size="small"
                    variant="outlined"
                    disabled={!isEditing}
                />


                <Box display="flex" justifyContent="space-between" mt={2}>
                    <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => setIsEditing(true)}>
                        Edit ✏️
                    </Button>

                    <Button variant="contained" color="success" sx={{ mt: 2 }} onClick={handleSave} disabled={!isEditing}>
                        Save 💾
                    </Button>

                    <Button variant="contained" color="error" sx={{ mt: 2 }} onClick={() => {
                        dispatch(deleteContactAction(contact.id));
                        onBack();
                    }}>
                        Delete 🗑️
                    </Button>
                </Box>


                <Button variant="contained" fullWidth onClick={onBack}
                    sx={{ mt: 3, backgroundColor: "#8B4513" }}>
                    Back 🔙
                </Button>

            </CardContent>
        </Card>
    );
};
