import "./style.css";

const Form = () => (
  <form class="form js-form">
    <input
      class="form__newTask js-form__newTask"
      type="text"
      name="addTask"
      placeholder="Co jest do zrobienia?"
    />
    <button class="form__button">Dodaj zadanie</button>
  </form>
);

export default Form;
