import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function MyButton() {
  return (
    <div>
      <button>i am button</button>
      <h1>wellcome to my app</h1>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Hello There.
        <br />
        how do you do?
      </p>
    </div>
  );
}

const user = {
  name: `dexxy`,
  imageUrl:
    "https://th.bing.com/th/id/OIP.ONZA1FclxX6KZE9bONkzzwHaQA?cb=iwp2&rs=1&pid=ImgDetMain",
  imageSize: 200,
};
// export default MyButton;
// export default AboutPage;
export default function Profile() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={`Photo of` + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}
