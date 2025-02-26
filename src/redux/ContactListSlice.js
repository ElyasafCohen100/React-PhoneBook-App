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



// =========== Redux Slice for Managing Contacts =========== //

import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",

  initialState: {

    contactsList: [
      { id: 1, firstName: "Elyasaf", lastName: "Cohen", phoneNumber: "05012345671", imageUrl: "public\\avatarPic\\boy_avatar_1.jpg" },
      { id: 2, firstName: "Mayan", lastName: "Elkayam", phoneNumber: "05012345672", imageUrl: "public\\avatarPic\\girl_avatar_2.jpg" },
      { id: 3, firstName: "Yakir", lastName: "Yohanan", phoneNumber: "05012345673", imageUrl: "public\\avatarPic\\boy_avatar_2.jpg" },
      { id: 4, firstName: "Hadar", lastName: "Sarusi", phoneNumber: "05012345674", imageUrl: "public\\avatarPic\\girl_avatar_1.jpg" },
    ],
  },

  reducers: {
    // =========== Action: Add New Contact =========== //
    addNewContactAction: (state, action) => {
      state.contactsList.push(action.payload);
    },

    // =========== Action: Edit Existing Contact =========== //
    editContactAction: (state, action) => {
      const { id, updatedContact } = action.payload;
      const index = state.contactsList.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        state.contactsList[index] = updatedContact;
      }
    },

    // =========== Action: Delete Contact =========== //
    deleteContactAction: (state, action) => {
      state.contactsList = state.contactsList.filter((contact) => contact.id !== action.payload);
    },

  },
});

export const { addNewContactAction, editContactAction, deleteContactAction } = contactsSlice.actions;
export default contactsSlice.reducer;
