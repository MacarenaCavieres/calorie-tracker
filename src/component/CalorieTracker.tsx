import { useActivity } from "../hook/useActivity";
import CalorieDisplay from "./CalorieDisplay";

export default function CalorieTracker() {
    const { caloriesConsumed, caloriesBurned, difCalories } = useActivity();
    return (
        <div className="flex justify-around max-w-4xl mx-auto">
            <CalorieDisplay calories={caloriesConsumed} text="Consumidas" />
            <CalorieDisplay calories={caloriesBurned} text="Quemadas" />
            <CalorieDisplay calories={difCalories} text="Total" />
        </div>
    );
}
