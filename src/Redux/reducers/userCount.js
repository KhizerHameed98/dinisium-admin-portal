import {
    GET_USER_COUNT
} from "../actions/types";

const initialState = {
    count: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_COUNT:
            return {
                ...state,
                count: payload
            };
        default:
            return state;
    }
};
