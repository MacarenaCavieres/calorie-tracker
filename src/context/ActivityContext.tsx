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
};

export const ActivityContext = createContext<ActivityContextProps>(null!);

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
    const [state, dispatch] = useReducer(activityReducer, initialState);

    const categoryName = useMemo(
        () => (category: Activity["category"]) =>
            categories.map((cat) => (cat.id === category ? cat.name : "")),
        [state.activities]
    );

    return (
        <ActivityContext.Provider
            value={{
                state,
                dispatch,
                categoryName,
            }}
        >
            {children}
        </ActivityContext.Provider>
    );
};
