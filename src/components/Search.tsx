import { useState } from "react";

import styles from "./Search.module.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { SearchTask, Task } from '../App';


export function Search({ addTask }: SearchTask) {
  const [anotation, setAnotation] = useState("");

  function adicionandoATaskQueFoiDigitada() {
    if(anotation.trim()){

        const newTask: Task = {
          index: Math.random(),
          content: anotation
        }

        addTask(newTask);
        setAnotation('')
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicionar uma nova task"
        value={anotation}
        onChange={(e) => setAnotation(e.target.value)}
      />
      <button onClick={adicionandoATaskQueFoiDigitada}>
        <span>Criar</span>
        <IoAddCircleOutline />
      </button>
    </div>
  );
}
