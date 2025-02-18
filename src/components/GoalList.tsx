import * as React from "react";

interface Goal {
    title: string;
    description: string;
}

interface GoalListProps {
    goalList: Goal[];
    setGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
}

function GoalList({ goalList, setGoals }: GoalListProps) {
    const handleDelete = (index: number) => {
        setGoals(goals => goals.filter((_, i) => i !== index));
    };

    return (
        <ul className="list">
            {goalList.map((goal, index) => (
                <li key={index} className="list-item">
                    <div className="content">
                        <h3 className="title">{goal.title}</h3>
                        <p className="description">{goal.description}</p>
                    </div>
                    <button onClick={() => handleDelete(index)} className="delete-button">×</button>
                </li>
            ))}
        </ul>
    );
}

export default GoalList;