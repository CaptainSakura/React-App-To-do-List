import "./style.css";

const Buttons = ({ tasks, hideDone }) =>
  tasks.lenght > 0 && (
    <div className="section__buttonsContainer">
      {/* <button className="section__buttonToggleHideDone section__buttonToggleHideDone--marginTop">
        Pokaż ukończone
      </button>
      <button className="section__buttonDoneAll">Zakończ wszystkie</button> */}
      {tasks.lenght > 0 && (
        <>
          <button className="section__buttonToggleHideDone">
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
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
