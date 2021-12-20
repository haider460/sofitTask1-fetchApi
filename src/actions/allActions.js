import axios from "axios";
import { getDataSliceActions } from "../reducers/getDataSlice";
import { searchSliceAction } from "../reducers/searchDataSlice";
import { viewDetailsSliceAction } from "../reducers/viewDetailsSlice";
import { sugeSliceAction } from "../reducers/sugestionSlice";

export const getDataAction = () => async (dispatch) => {
    try {
        dispatch(getDataSliceActions.loadingReducer());

        const { data } = await axios.get(
            "https://api.openbrewerydb.org/breweries"
        );

        dispatch(
            getDataSliceActions.successReducer({
                data,
            })
        );
    } catch (error) {
        dispatch(
            getDataSliceActions.errorReducer({
                payload: error.response,
            })
        );
    }
};

export const searchDataActions = (inputID) => async (dispatch) => {
    try {
        dispatch(searchSliceAction.loadingReducer());

        const config = {
            headers: {
                "content-type": "application/json",
            },
        };

        const { data } = await axios.get(
            `https://api.openbrewerydb.org/breweries/search?query=${inputID}`,
            config
        );

        dispatch(
            searchSliceAction.successReducer({
                data,
            })
        );
    } catch (error) {
        dispatch(
            searchSliceAction.errorReducer({
                payload: error.response,
            })
        );
    }
};
export const sugestDataActions = (inputID) => async (dispatch) => {
    try {
        dispatch(sugeSliceAction.loadingReducer());

        const config = {
            headers: {
                "content-type": "application/json",
            },
        };

        const { data } = await axios.get(
            `https://api.openbrewerydb.org/breweries/search?query=${inputID}`,
            config
        );

        dispatch(
            sugeSliceAction.successReducer({
                data,
            })
        );
    } catch (error) {
        dispatch(
            sugeSliceAction.errorReducer({
                payload: error.response,
            })
        );
    }
};

export const ViewDataActions = (inputID) => async (dispatch) => {
    try {
        dispatch(viewDetailsSliceAction.loadingReducer());

        const config = {
            headers: {
                "content-type": "application/json",
            },
        };

        const { data } = await axios.get(
            `https://api.openbrewerydb.org/breweries/${inputID}`,
            config
        );

        dispatch(
            viewDetailsSliceAction.successReducer({
                data,
            })
        );
    } catch (error) {
        dispatch(
            viewDetailsSliceAction.errorReducer({
                payload: error.response,
            })
        );
    }
};
