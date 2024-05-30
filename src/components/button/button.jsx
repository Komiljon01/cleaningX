import "./button.css";

function Button({ text, bgColor }) {
  return <button className={`btn ${bgColor}`}>{text}</button>;
}

export default Button;
