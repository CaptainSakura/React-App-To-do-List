import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <header className="section__header">
      <h3 className="section__title">{title}</h3>
      {/* *header__TertiaryTwo */}
      {extraHeaderContent}
    </header>
    <div className="section__body">{body}</div>
    {/* section__paragraph--taskList */}
  </section>

  // <section className="section section--tasks">
  //   <div className="section__paragraph--taskList">
  //     {body}
  //   </div>
  // </section>
);

export default Section;
