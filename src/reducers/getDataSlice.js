import { createSlice } from "@reduxjs/toolkit";

const getDataSlice = createSlice({
    name: "getData",
    initialState: {
        loading: false,
        error: "",
        data: [],
    },
    reducers: {
        loadingReducer(state) {
            state.loading = true;
        },
        successReducer(state, action) {
            state.data = action.payload;
            state.loading = false;
        },
        errorReducer(state, action) {
            state.data = action.payload;
            state.loading = false;
        },
    },
});

export const getDataSliceActions = getDataSlice.actions;
export default getDataSlice;
