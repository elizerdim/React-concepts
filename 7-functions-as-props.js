function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function App() {
  const handleButtonClick = () => {
    window.location.href = "http://www.google.com";
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} />
    </div>
  );
}

// function with parameter as props
function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={() => handleClick('https://www.theodinproject.com')} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} />
    </div>
  );
}
