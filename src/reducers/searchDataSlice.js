import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        loading: false,
        error: "",
        searchData: [],
    },

    reducers: {
        loadingReducer(state) {
            state.loading = true;
        },
        successReducer(state, action) {
            state.loading = false;
            state.searchData = action.payload;
        },
        errorReducer(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const searchSliceAction = searchSlice.actions;

export default searchSlice;
