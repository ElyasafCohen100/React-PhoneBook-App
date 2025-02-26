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



// =========== Redux Store Configuration =========== //

import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./ContactListSlice";

// Creating the Redux store
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
