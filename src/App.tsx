import { useEffect } from "react";
import ActivityList from "./component/ActivityList";
import Form from "./component/Form";
import { useActivity } from "./hook/useActivity";
import CalorieTracker from "./component/CalorieTracker";

function App() {
    const { state, dispatch, isEmpty } = useActivity();

    useEffect(() => {
        localStorage.setItem("activity", JSON.stringify(state.activities));
    }, [state.activities]);

    return (
        <>
            <header className="bg-cyan-800 py-10 flex justify-around items-center px-3">
                <h1 className="text-4xl font-bold text-white">Registro de calorías</h1>
                <button
                    className="uppercase bg-amber-500 cursor-pointer hover:bg-amber-400
                 text-white font-bold p-3 rounded-lg disabled:opacity-10"
                    disabled={isEmpty}
                    onClick={() => dispatch({ type: "clear-app" })}
                >
                    Resetear app
                </button>
            </header>

            <main className="bg-cyan-700">
                <section className="py-20 px-5 max-w-4xl mx-auto">
                    <Form />
                </section>
            </main>
            <section className="bg-cyan-800 py-10">
                <CalorieTracker />
            </section>
            <section className="px-5 max-w-4xl mx-auto">
                <ActivityList />
            </section>
        </>
    );
}

export default App;
