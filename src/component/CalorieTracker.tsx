import { useActivity } from "../hook/useActivity";
import CalorieDisplay from "./CalorieDisplay";

export default function CalorieTracker() {
    const { caloriesConsumed, caloriesBurned, difCalories } = useActivity();
    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen Calorías</h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay calories={caloriesConsumed} text="Consumidas" />
                <CalorieDisplay calories={caloriesBurned} text="Quemadas" />
                <CalorieDisplay calories={difCalories} text="Total" />
            </div>
        </>
    );
}
