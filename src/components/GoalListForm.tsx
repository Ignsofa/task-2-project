import * as React from "react";
import { useState } from "react";

interface Goal {
    title: string;
    description: string;
}

interface GoalListFormProps {
    setGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
}

function GoalListForm({ setGoals }: GoalListFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && description) {
            setGoals(prev => [...prev, { title, description }]);
            setTitle("");
            setDescription("");
        } else {
            alert("Please fill in both fields");
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title"
                className="input"
            />
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
                className="input"
            />
            <button type="submit" className="button">Add Goal</button>
        </form>
    );
}

export default GoalListForm;