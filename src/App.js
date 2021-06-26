import React, { useState } from "react";
import RichTextBlock from "./TextComponent";
import "./App.css";

const initialValue = {
  size: "30px",
  maxLength: "5",
  fontSize: "30px",
  label: "Text input",
  backgroundColor: "blue",
  borderColor: "black",
  borderStyle: "solid",
  placeholder: "Enter the text",
  color: "white",
};

function App() {
  const [data, setData] = useState(initialValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });

    console.log(data.fontSize);
  };

  //const handleSubmit = () => {};

  return (
    <div className="App">
      <form>
        <input
          //onChange={(e) => setData(e.target.value)}
          onChange={handleInputChange}
          name="size"
          placeholder={data.size}
        />
        <br />
        <input
          placeholder={data.fontSize}
          //onChange={(e) => setData(e.target.value)}
          onChange={handleInputChange}
          name="fontSize"
        />
        <br />
        <input
          placeholder={data.maxLength}
          //onChange={(e) => setData(e.target.value)}
          onChange={handleInputChange}
          name="maxLength"
        />
        <br />
        <input
          name="label"
          placeholder={data.label}
          //onChange={(e) => setData(e.target.value)}
          onChange={handleInputChange}
        />
        <br />
        <input
          placeholder={data.backgroundColor}
          //onChange={(e) => setData(e.target.value)}
          onChange={handleInputChange}
          name="backgroundColor"
        />
        <br />
        <input
          placeholder={data.borderColor}
          //onChange={(e) => setData(e.target.value)}
          onChange={handleInputChange}
          name="borderColor"
        />
        <br />
        <input
          placeholder={data.borderStyle}
          //onChange={(e) => setData(e.target.value)}
          onChange={handleInputChange}
          name="borderStyle"
        />
        <br />
        <input
          placeholder={data.placeholder}
          //onChange={(e) => setData(e.target.value)}
          onChange={handleInputChange}
          name="placeholder"
        />
        <br />
        <input
          placeholder={data.color}
          ///onChange={(e) => setData(e.target.value)}
          onChange={handleInputChange}
          name="color"
        />
        <br />
        {/* <button type="button" onClick={() => handleSubmit()}>
          Submit
        </button> */}
      </form>

      <br />

      <RichTextBlock data={data} />
    </div>
  );
}

export default App;
