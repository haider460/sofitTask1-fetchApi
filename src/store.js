import { configureStore } from "@reduxjs/toolkit";
import getDataSlice from "./reducers/getDataSlice";
import SearchSlice from "./reducers/searchDataSlice";
import viewDetailsSlice from "./reducers/viewDetailsSlice";
import sugestionSlice from "./reducers/sugestionSlice";

const store = configureStore({
    reducer: {
        getData: getDataSlice.reducer,
        searchData: SearchSlice.reducer,
        viewData: viewDetailsSlice.reducer,
        sugeSlice: sugestionSlice.reducer,
    },
});

export default store;
