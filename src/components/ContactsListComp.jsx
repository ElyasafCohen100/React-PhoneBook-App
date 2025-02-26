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



// =========== Contacts List Component =========== //

import React from 'react';
import { useSelector } from 'react-redux';

import { Avatar, ListItemAvatar } from "@mui/material"; // for picture
import { List, ListItemButton, ListItemText, Button, Paper, Typography } from '@mui/material';



// ************************************** the ContactsListComp componenta ****************************************//

export default function ContactsListComp({ onSelectContact, onAddContact }) {

    const contacts = useSelector((state) => state.contacts.contactsList);

    return (

        <Paper sx={{
            backgroundColor: "#e3f2fd", maxWidth: 400, mx: "auto",
            p: 2, mt: 2, borderRadius: 7, boxShadow: 20
        }}>

            <Typography variant="h5" gutterBottom textAlign="center">
                <h4>💥 Welcome to my phoneBook 💥</h4>
                📞 Contact List  📞
            </Typography>

            <List>

                {contacts.map((contact) => (

                    <ListItemButton
                        key={contact.id}
                        onClick={() => onSelectContact(contact)}
                        sx={{
                            "&:hover": { backgroundColor: "#ffcc80" },
                            borderBottom: "1px solid #ddd"
                        }}>


                        {/* ========== Add a circle for a photo next to each contact ========= */}
                        <ListItemAvatar>
                            <Avatar
                                src={contact.imageUrl || ""}
                                alt={contact.firstName}
                                sx={{ bgcolor: "#4A90E2", width: 50, height: 50, mr: 2 }}
                            >
                                {(!contact.imageUrl && contact.firstName) ? contact.firstName[0] : ""}
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText
                            primary={`${contact.firstName} ${contact.lastName}`}
                            secondary={contact.phoneNumber}
                        />
                    </ListItemButton>
                ))}

            </List>


            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={onAddContact}
                sx={{ mt: 2, borderRadius: 2 }}
            > Add Contact ✅
            </Button>

        </Paper>
    );
};
