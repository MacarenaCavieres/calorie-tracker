import { useActivity } from "../hook/useActivity";

export default function ActivityList() {
    const { state } = useActivity();
    return (
        <div className="mt-5 py-10">
            <h2 className="text-4xl font-bold text-center">Actividades</h2>
            {state.activities.map((item) => (
                <div>
                    <p>{item.category}</p>
                    <p>{item.name}</p>
                    <p>{item.calories}</p>
                </div>
            ))}
        </div>
    );
}
