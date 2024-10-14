import { Activity } from "../types";

export type ActivityActions = { type: "add-activity"; payload: { newActivity: Activity } };

export type ActivityStateProps = {
    activities: Activity[];
};

const localStorageActivity = (): Activity[] => {
    const activitySave = localStorage.getItem("activity");
    return activitySave ? JSON.parse(activitySave) : [];
};

export const initialState = {
    activities: localStorageActivity(),
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
