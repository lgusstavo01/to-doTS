import styles from "./List.module.css";

export function List() {
  return (
    <div className={styles.container}>
      <img src="./clipboard.png" alt="" />
      <p>
        Você não tem tarefas cadastradas<br/>
        <span>Crie tarefas e organize seus ites a fazer</span>
      </p>
    </div>
  );
}
