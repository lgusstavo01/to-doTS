import { useState } from 'react';
import styles from "./ItemList.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { Task } from '../App';

interface taskProps {
  tasks: Task[];
  markAsCompleted: (index: number) => void;
  removeTask:(index: number) => void;
}

type itens = {
  [key: number]: boolean;
}

export function ItemList({ tasks, markAsCompleted, removeTask }: taskProps) {
  const [checkedItems, setCheckedItems] = useState<itens>({});

  function handleCheckboxClick(taskId: number) {
    setCheckedItems(estadoAtual => ({
      ...estadoAtual,
      [taskId]: !estadoAtual[taskId]
    }));

    markAsCompleted(taskId)
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.itemList}>
            <input 
              type="checkbox" 
              name={`checkbox-${index}`} 
              id={`checkbox-${index}`} 
              checked={!!checkedItems[index]}
              onChange={() => handleCheckboxClick(index)}
            />
            <p className={checkedItems[index] ? styles.clicked : styles.notClicked}>
              {task.content}
            </p>
          </div>
          <div className={styles.iconList}>
            <button onClick={() => removeTask(index)}>
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
