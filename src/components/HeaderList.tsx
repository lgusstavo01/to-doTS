import styles from "./HeaderList.module.css";

interface quantityTasksProp {
  quantityTasks: number,
  quantityTasksCompleted:number
}

export function HeaderList({quantityTasks, quantityTasksCompleted}: quantityTasksProp) {
  return (
    <div className={styles.container}>
      <aside>
        <p>Tarefas Criadas</p>
        <span>{quantityTasks}</span>
      </aside>
      <aside>
        <p>Tarefas Concluidas</p>
        <span>{`${quantityTasksCompleted} de ${quantityTasks}`}</span>
      </aside>
    </div>
  );
}
