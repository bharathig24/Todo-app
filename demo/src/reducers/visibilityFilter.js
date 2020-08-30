import { VisibilityFilters } from "../actions/action";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;