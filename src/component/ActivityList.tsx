import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useActivity } from "../hook/useActivity";

export default function ActivityList() {
    const { state, dispatch, categoryName, isEmpty } = useActivity();

    return (
        <div className="mt-5 py-10">
            <h2 className="text-4xl font-bold text-center">Actividades</h2>
            {isEmpty ? (
                <p className="text-center mt-5 text-2xl">Sin actividades aún...</p>
            ) : (
                state.activities.map((item) => (
                    <div key={item.id} className="px-5 py-10 bg-white mt-5 flex justify-between shadow">
                        <div className="space-y-2 relative">
                            <p
                                className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold 
                            ${item.category === 1 ? "bg-green-700" : "bg-amber-500"}`}
                            >
                                {categoryName(+item.category)}
                            </p>
                            <p className="text-2xl font-bold pt-5">{item.name}</p>
                            <p
                                className={`font-black text-4xl  ${
                                    item.category === 1 ? "text-green-700" : "text-amber-500"
                                } `}
                            >
                                {item.calories} {""} Calorías
                            </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <button
                                type="button"
                                onClick={() => dispatch({ type: "set-activeId", payload: { id: item.id } })}
                            >
                                <PencilSquareIcon className="h-8 w-8 text-gray-800" />
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    dispatch({ type: "delete-activity", payload: { id: item.id } })
                                }
                            >
                                <XCircleIcon className="h-8 w-8 text-red-500" />
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
