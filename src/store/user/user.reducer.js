import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  // createSlice(): Not only create reducer but actually create the actions and action types
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    /* 
    Reducer receives state and action then returns an object
    setCurrentUser(): Define the name of the reducer function that represents the action that updates this slice of the user reducer state
    */
    setCurrentUser(state, action) {
      // -> "user/setCurrentUser". Generate new action type automatically
      state.currentUser = action.payload;
    },
  },
});

// export const userReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };

// .action (the actions that we get back) is one of the properties which is returned from createSlice (contains all the actions written inside reducers: {})
export const { setCurrentUser } = userSlice.actions;

// Get the actual reducer function that gets generated from createSlice
export const userReducer = userSlice.reducer;
