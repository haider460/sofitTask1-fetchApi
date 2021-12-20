import { createSlice } from "@reduxjs/toolkit";

const sugeSlice = createSlice({
    name: "sugest",
    initialState: {
        loading: false,
        error: "",
        searchData1: [],
    },

    reducers: {
        loadingReducer(state) {
            state.loading = true;
        },
        successReducer(state, action) {
            state.loading = false;
            state.searchData1 = action.payload;
        },
        errorReducer(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const sugeSliceAction = sugeSlice.actions;

export default sugeSlice;
