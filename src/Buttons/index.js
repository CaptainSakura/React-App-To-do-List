import "./style.css";

const Buttons = ({ tasks, hideDoneTask }) =>
  tasks.lenght > 0 && (
    <div className="section__buttonsContainer">
      {tasks.lenght > 0 && (
        <>
          <button className="section__buttonToggleHideDone">
            {hideDoneTask ? "Pokaż" : "Ukryj"} ukończone
          </button>
          <button
            className="section__buttonDoneAll"
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </button>
        </>
      )}
    </div>
  );
export default Buttons;
