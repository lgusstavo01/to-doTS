import { useState } from 'react';

import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { HeaderList } from "./components/HeaderList";
import { List } from "./components/List"

import styles from "./App.module.css";
import "./global.css";
import { ItemList } from './components/ItemList';

export interface Task {
  index: number;
  content: string
}

export interface SearchTask {
  addTask: (task: Task) => void;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<Task[]>([]);

  function markTaskCompleted(index: number) {
    const updatedTasks = [...tasks];
    const taskCompleted = updatedTasks[index];
    const isAlreadyCompleted = tasksCompleted.includes(taskCompleted);
  
    if (isAlreadyCompleted) {
      const updatedCompletedTasks = tasksCompleted.filter(task => task !== taskCompleted);
      setTasksCompleted(updatedCompletedTasks);
    } else {
      setTasksCompleted([...tasksCompleted, taskCompleted]);
    }
  }

  function addNewTask(newTask: Task){
    setTasks((tasks => [...tasks, newTask]));
  }

  function removeTask(index: number){
    setTasks(tasks => tasks.filter((_task,i) => i !== index))
    setTasksCompleted(tasksCompleted => tasksCompleted.filter((_task, i) => i !== index));
  }

  return ( 
    <div>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Search addTask={addNewTask}/>
        </div>
      </div>
      <div className={styles.wrapper}>
        <HeaderList quantityTasks={tasks.length} quantityTasksCompleted={tasksCompleted.length}/>

        {tasks.length > 0 ? (
          <ItemList tasks={tasks} markAsCompleted={markTaskCompleted} removeTask={removeTask}/>
        ) :
        <List />
        }
      </div>
    </div>
  );
}
