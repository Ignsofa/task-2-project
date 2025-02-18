import GoalList from "./components/GoalList";
import { useState } from "react";
import GoalListForm from "./components/GoalListForm";

function App() {
    const initialGoals = [
        { title: "Learn Html", description: "Learn basics tags" },
        { title: "Learn Css", description: "Learn basics css" },
        { title: "Learn JavaScript", description: "Learn basics JS" },
    ];

    const [goals, setGoals] = useState(initialGoals);

    return (
        <div className="container">
            <GoalListForm setGoals={setGoals} />
            <GoalList goalList={goals} setGoals={setGoals} />
        </div>
    );
}

export default App;