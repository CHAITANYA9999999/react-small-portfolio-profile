import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

function Avatar() {
  return <img src="ChaitanyaFormalPhoto1.jpg" className="avatar" alt="photo" />;
}

function Intro() {
  return (
    <div>
      <h1>Chaitanya Mahajan</h1>
      <p>
        I am a highly motivated and enthusiastic student seeking an internship
        to gain valuable experience. Currently pursuing Computer Science
        Engineering 3rd Year. I am fluent in Python and SQL. Currently learning
        azure,aws and javascript and react.
      </p>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span> {props.emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😘" color="lightBlue" />
      <Skill skill="Javascript" emoji="😘" color="orange" />
      <Skill skill="Flutter" emoji="😘" color="yellow" />
      <Skill skill="Dart" emoji="😘" color="cyan" />
    </div>
  );
}
