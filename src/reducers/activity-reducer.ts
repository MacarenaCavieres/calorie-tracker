import { Activity } from "../types";

export type ActivityActions = { type: "add-activity"; payload: { newActivity: Activity } };

export type ActivityStateProps = {
    activities: Activity[];
};

export const initialState = {
    activities: [],
};

export const activityReducer = (state: ActivityStateProps = initialState, action: ActivityActions) => {
    if (action.type === "add-activity") {
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity],
        };
    }

    return state;
};
