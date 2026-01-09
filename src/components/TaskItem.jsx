function TaskItem({ task, deleteTask, toggleTask }) {
    return (
        <li className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleTask(task.id)}>
                {task.title}
                <strong className={`priority-${task.priority}`}>
                    {" "}({task.priority})
                </strong>
            </span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
        </li>
    );
}

export default TaskItem;
