import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react";
import {
    ActivityActions,
    activityReducer,
    ActivityStateProps,
    initialState,
} from "../reducers/activity-reducer";
import { Activity } from "../types";
import { categories } from "../data/categories";

type ActivityProviderProps = {
    children: ReactNode;
};

type ActivityContextProps = {
    state: ActivityStateProps;
    dispatch: Dispatch<ActivityActions>;
    categoryName: (category: Activity["category"]) => string[];
    isEmpty: boolean;
    caloriesConsumed: number;
    caloriesBurned: number;
    difCalories: number;
};

export const ActivityContext = createContext<ActivityContextProps>(null!);

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
    const [state, dispatch] = useReducer(activityReducer, initialState);

    const caloriesConsumed = useMemo(
        () => state.activities.reduce((total, act) => (act.category === 1 ? total + act.calories : total), 0),
        [state.activities]
    );
    const caloriesBurned = useMemo(
        () => state.activities.reduce((total, act) => (act.category === 2 ? total + act.calories : total), 0),
        [state.activities]
    );
    const difCalories = caloriesConsumed - caloriesBurned;

    const categoryName = useMemo(
        () => (category: Activity["category"]) =>
            categories.map((cat) => (cat.id === category ? cat.name : "")),
        [state.activities]
    );

    const isEmpty = useMemo(() => state.activities.length === 0, [state.activities]);

    return (
        <ActivityContext.Provider
            value={{
                state,
                dispatch,
                categoryName,
                isEmpty,
                caloriesConsumed,
                caloriesBurned,
                difCalories,
            }}
        >
            {children}
        </ActivityContext.Provider>
    );
};
