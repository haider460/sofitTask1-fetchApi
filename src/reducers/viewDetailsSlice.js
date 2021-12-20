import { createSlice } from "@reduxjs/toolkit";

const viewDetailsSlice = createSlice({
    name: "search",
    initialState: {
        loading: false,
        error: "",
        data: {},
    },

    reducers: {
        loadingReducer(state) {
            state.loading = true;
        },
        successReducer(state, action) {
            state.loading = false;
            state.data = action.payload;
        },
        errorReducer(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const viewDetailsSliceAction = viewDetailsSlice.actions;

export default viewDetailsSlice;
