import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [output, setOutput] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [massege, setMassege] = useState("");
  // const[input,setInput]=useState("")
  const heighthandler = (event) => {
    setHeight(event.target.value);
  };
  const weighthandler = (event) => {
    setWeight(event.target.value);
  };
  const result = () => {
    let wg = weight;
    let high = height;
    let res = wg / (high * high);
    parseInt(res);
    console.log(res);
    setOutput(res);
    if (height === "" && weight === "") {
      setMassege("please enter your weight and height");
      setOutput("");
    } else if (height === "") {
      setMassege("please enter height");
      setOutput("");
    } else if (weight === "") {
      setMassege("please enter your weight ");
      setOutput("");
    } else if (weight <= 0) {
      setMassege("please enter Correct weight ");
      setOutput("");
    } else if (height <= 0) {
      setMassege("please enter Correct height ");
      setOutput("");
    } else if (res <= 18.5) {
      setMassege("Underweight :(");
    } else if (res > 18.5 && res <= 24.5) {
      setMassege("Healthy weight :)");
    } else if (res > 25.0 && res <= 29.9) {
      setMassege("Over Weight :( ");
    } else if (res >= 30.0) {
      setMassege("Obecity :(");
    }
  };
  return (
    <div className="App">
      <h2>BMI CALCULATOR</h2>
      <div>
        <h3>
          Height:
          <input
            type="number"
            placeholder="height in mt"
            onChange={heighthandler}
          />
        </h3>
      </div>
      <h3>
        Weight:
        <input
          type="number"
          placeholder="weight in kg"
          onChange={weighthandler}
        />
      </h3>
      <button className="button" onClick={result}>
        Result
      </button>
      <p className="containts">Your BMI is:{output}</p>
      <p className="containts">Status:{massege}</p>
    </div>
  );
}

export default App;
