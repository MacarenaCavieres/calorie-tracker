import { categories } from "../data/categories";

export default function Form() {
    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">
                    Elija actividad
                </label>
                <select name="category" id="" className="rounded-lg border border-slate-300 p-2">
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">
                    Describa actividad
                </label>
                <input
                    type="text"
                    className="rounded-lg border border-slate-300 p-2"
                    placeholder="Manzana, Trotar, Bicicleta, Hamburguesa"
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">
                    Ingrese calorías
                </label>
                <input
                    type="text"
                    className="rounded-lg border border-slate-300 p-2"
                    placeholder="500, 300"
                />
            </div>
        </form>
    );
}
