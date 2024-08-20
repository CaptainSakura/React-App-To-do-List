import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        className={`list__item ${
          task.done && hideDone ? "list__item--hidden" : ""
        }`}>
          <button className="list__button list__button--done">
          {task.done ? "✔" : ""}
        </button>
        <span className={`list__button${task.done} ? "list__item--done" : ""}`}>
          {task.content}
        </span>
        <button className="list__button list__button--red list__button--remove">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
