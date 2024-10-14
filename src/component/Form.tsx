import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../data/categories";
import { Activity } from "../types";
import { useActivity } from "../hook/useActivity";

const initialState: Activity = {
    id: "",
    category: 1,
    name: "",
    calories: 0,
};

export default function Form() {
    const { dispatch } = useActivity();
    const [activity, setActivity] = useState<Activity>(initialState);

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ["category", "calories"].includes(e.target.id);

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value,
        });
    };

    const isValidForm = () => {
        const { name, calories } = activity;
        return name.trim() !== "" && calories > 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: "add-activity", payload: { newActivity: activity } });
        setActivity({
            ...initialState,
            id: uuidv4(),
        });
    };

    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">
                    Elija actividad
                </label>
                <select
                    id="category"
                    className="rounded-lg border border-slate-300 p-2"
                    onChange={handleChange}
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">
                    Describa actividad
                </label>
                <input
                    id="name"
                    type="text"
                    className="rounded-lg border border-slate-300 p-2"
                    placeholder="Manzana, Trotar, Bicicleta, Hamburguesa"
                    onChange={handleChange}
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">
                    Ingrese calorías
                </label>
                <input
                    id="calories"
                    type="number"
                    className="rounded-lg border border-slate-300 p-2"
                    placeholder="500, 300"
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className="bg-slate-800 hover:bg-slate-700 rounded-lg p-3 text-white
                    uppercase font-bold w-full disabled:opacity-10"
                value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
                disabled={!isValidForm()}
            />
        </form>
    );
}
