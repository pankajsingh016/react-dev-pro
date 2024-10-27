import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  function bmiCal() {

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);


    if (weightNum > 0 && heightNum > 0) {
      const hm = heightNum / 100;
      const bmi_cal = weightNum / (hm * hm);
      setBmi(bmi_cal.toFixed(2));

      let category = "";

      if(bmi_cal < 18.5){
        category = "Underweight";
      }
      else if(bmi_cal < 25){
        category = "Normal Weight";
      }
      else if(bmi_cal < 30)
      {
        category = "OverWeight";
      } else{
        category = "Obesity";
      }

      setMessage(`Your are in Category: ${category}`);
    }
    else{
      setMessage('Please enter Valid weight and height values.');
      setBmi(true)
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        width: "fit-content",
        height: "fit-content",
        padding: "40px",
        margin: "auto",
        marginTop: "10%",
        border: "0px solid black",
        borderRadius: "10px",
        boxShadow: "0px 0px 7px 1px rgba(0,0,0,0.5)",
        fontFamily: "sans-serif",
      }}
    >
      <div className="container-form" style={{ alignItems: "center" }}>
        <div
          className="heading"
          style={{ textAlign: "center", color: "#5A5A5A", fontWeight: 600 }}
        >
          <p>BMI CALCULATOR</p>
        </div>
        <Input_area
          id="weight"
          label_title="Weight(kg)"
          placeHolder="Enter Weight Value"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></Input_area>

        <Input_area
          id="height"
          label_title="Height(cm)"
          placeHolder="Enter Height Value"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        ></Input_area>
        <Button
          text="Submit"
          backColor={"#5699E6"}
          textColor={"white"}
          onClick={bmiCal}
        ></Button>
        <Button
          text="Reload"
          backColor={"gray"}
          textColor={"black"}
          onClick={() => {
            setWeight(0);
            setHeight(0);
            setBmi("");
            setMessage("");
          }}
        ></Button>

        {bmi && (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <p>Your BMI: {bmi}</p>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Input_area({ id, label_title, value, placeHolder, onChange }) {
  return (
    <div style={{ alignItems: "center" }}>
      <label htmlFor={id} style={{ color: "#5A5A5A", fontSize: "14px" }}>
        {label_title}
      </label>
      <input
        type="number"
        id={id}
        placeholder={placeHolder}
        style={{
          width: "100%",
          height: "25px",
          margin: "3px 0px 10px 0px",
          fontSize: "15px",
        }}
        min={0}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function Button({ text, backColor, textColor, onClick }) {
  return (
    <button
      style={{
        backgroundColor: backColor,
        color: textColor,
        height: "45px",
        width: "100%",
        margin: "4px 0px 3px 0px",
        borderRadius: "10px",
        border: "1px solid black",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default App;
