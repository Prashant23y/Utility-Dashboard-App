import { useState } from "react";

function TaskForm({ addTask }) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("Low");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        addTask({
            id: Date.now(),
            title,
            priority,
            completed: false
        });

        setTitle("");
        setPriority("Low");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button>Add</button>
        </form>
    );
}

export default TaskForm;
