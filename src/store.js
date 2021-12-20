import { configureStore } from "@reduxjs/toolkit";
import getDataSlice from "./reducers/getDataSlice";
import SearchSlice from "./reducers/searchDataSlice";
import viewDetailsSlice from "./reducers/viewDetailsSlice";
import sugeSlice from "./reducers/sugestionSlice";

const store = configureStore({
    reducer: {
        getData: getDataSlice.reducer,
        searchData: SearchSlice.reducer,
        viewData: viewDetailsSlice.reducer,
        sugeSlice: sugeSlice.reducer,
    },
});

export default store;
