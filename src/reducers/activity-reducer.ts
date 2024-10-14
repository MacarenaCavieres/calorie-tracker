import { Activity } from "../types";

export type ActivityActions =
    | { type: "add-activity"; payload: { newActivity: Activity } }
    | { type: "set-activeId"; payload: { id: Activity["id"] } }
    | { type: "delete-activity"; payload: { id: Activity["id"] } }
    | { type: "clear-app" };

export type ActivityStateProps = {
    activities: Activity[];
    activeId: Activity["id"];
};

const localStorageActivity = (): Activity[] => {
    const activitySave = localStorage.getItem("activity");
    return activitySave ? JSON.parse(activitySave) : [];
};

export const initialState = {
    activities: localStorageActivity(),
    activeId: "",
};

export const activityReducer = (state: ActivityStateProps = initialState, action: ActivityActions) => {
    if (action.type === "add-activity") {
        let updateActivity: Activity[] = [];
        if (state.activeId) {
            updateActivity = state.activities.map((item) =>
                item.id === state.activeId ? action.payload.newActivity : item
            );
        } else {
            updateActivity = [...state.activities, action.payload.newActivity];
        }
        return {
            ...state,
            activities: updateActivity,
            activeId: "",
        };
    }

    if (action.type === "set-activeId") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return {
            ...state,
            activeId: action.payload.id,
        };
    }
    if (action.type === "delete-activity") {
        return {
            ...state,
            activities: state.activities.filter((item) => item.id !== action.payload.id),
        };
    }
    if (action.type === "clear-app") {
        return {
            ...state,
            activities: [],
            activeId: "",
        };
    }

    return state;
};
