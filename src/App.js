import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Nov 12 at 3pm",
        reminder: true
    },
    {
        id: 2,
        text: "Football at Apenkwa",
        day: "Friday at 8pm",
        reminder: false
    },
    {
        id: 3,
        text: "Dinner at Capitol Restaurant",
        day: "Nov 26 at 7pm",
        reminder: true
    }
])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
    ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask
        (!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks here!'}
    </div>
  );
}

export default App;
