import "./styles.css";
import { useState } from "react";
import Task from "./Task";

export default function App() {
  //create a task: category , text, priority,
  const [tasks, setUserTasks] = useState([
    {
      text: "Go to the mall",
      category: "personal",
      priority: "Medium",
      dueDate: "2024-03-28",
    },
    {
      text: "Invest Money in My Biz",
      category: "work",
      priority: "High",
      dueDate: "2024-03-30",
    },
  ]);

  //add new tasks to the list of tasks
  const addTask = (text, category, priority, due_date) => {
    setUserTasks([...tasks, { text, category, priority, due_date }]);
  };

  //create an event handler to get the user text aka input
  const handleAddTask = (event) => {
    event.preventDefault();
    const newText = event.target.elements.text.value;
    const newCategory = event.target.elements.category.value;
    const newPriority = event.target.elements.priority.value;
    const newDueDate = event.target.elements.due_date.value;
    //attribute the elements value to the add task
    addTask(newText, newCategory, newPriority, newDueDate);
    //clear the form after adding the task
    event.target.reset();
  };

  return (
    <div className="App">
      <h1>My_To_Do_List</h1>
      <div className="forms">
        <form onSubmit={handleAddTask}>
          <div className="text_input">
            <label htmlFor="text"> Task</label>
            <input type="text" name="text" placeholder="Enter a new task" />
          </div>

          <div className="category_s">
            <label htmlFor="category">Choose Category</label>
            <select name="category" id="category">
              <option value="defaulted">Select...</option>
              <option value="Errands">Errands</option>
              <option value="Work">Work</option>
              <option value="School">School</option>
              <option value="Love">Love</option>
            </select>
          </div>
          <div className="priority">
            <label htmlFor="priority">Choose priority</label>
            <select name="priority" id="priority">
              <option value="defaulted">Select...</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="due_date">
            <label htmlFor="dueDate">Due date </label>
            <input type="date" name="due_date" id="date" />
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <h1>My Tasks -_-</h1>
      {tasks.map((task) => (
        <Task key={task.text} {...task} />
      ))}
    </div>
  );
}
