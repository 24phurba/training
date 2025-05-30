import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const NameCard = (props) => {
  const { name, age, bio, position } = props;
  return (
    <div class={`shadow-3 name-card ${position}`}>
      <p>{name}</p>
      <p>{age}</p>
      <p>{bio}</p>
    </div>
  );
};

function App() {
  // const [] =()
  return (
    <div>
      <NameCard
        name="tashi"
        age="22"
        bio="She is doing web development course at Bumthang"
        position="left"
      />
      <NameCard
        name="jamyang"
        age="22"
        bio="She is doing web development course at Bumthang"
        position="right"
      />
      <NameCard
        name="phurba"
        age="25"
        bio="She is doing web development course at Bumthang"
        position="left"
      />
      <NameCard
        name="norbu"
        age="21"
        bio="She is doing web development course at Bumthang"
        position="right"
      />
    </div>
  );
}

export default App;
