import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name : "app",
    initialState : {
        isSideBarOpen: true,
    },
    reducers: {
        toggleMenu : (state) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        }
    }
});

export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;