import React, { useEffect, useState } from 'react'

const Task = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: task, completed: false,  createdAt: Date.now(), },
    ]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h3 className='title'>My Tasks</h3>
      <div className="add-card">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>


      {tasks.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: '18px', marginTop: "50px", color: "black" }}>
          No tasks available
        </p>
      ) : <div className="task-grid">
        {tasks.map((t) => (
          <div
            key={t.id}
            className={`task-card ${t.completed ? "completed" : ""}`}
          >
            <h3>{t.text}</h3>
             <p className="task-date">{new Date(t.createdAt).toLocaleString()}</p>
            <p>Status: {t.completed ? <span style={{color:'green'}}>Completed</span> : <span style={{color:'red'}}>Pending</span>}</p>

            <div className="actions">
              <button onClick={() => toggleTask(t.id)}>
                {t.completed ? "Undo" : "Complete"}
              </button>
              <span className="delete" onClick={() => deleteTask(t.id)}>
                🗑️
              </span>
            </div>
          </div>
        ))}
      </div>
      }
    </div>
  );
}

export default Task






