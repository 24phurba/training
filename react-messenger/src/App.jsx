import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const owner = 2;

const messages = [
  {
    senderId: 1,
    name: "Tom",
    message: "hi jerrry,how have you been?",
  },

  {
    senderId: 2,
    name: "Jerry",
    message:
      "Hello Tom,i am doing good. i miss our good old times.i hope missy is treating you well.",
  },
  {
    senderId: 1,
    name: "Tom",
    message:
      "oh! those were the days, it still feels like yestaday. She is feeding me well. Wana have party at Boob this sunday?",
  },
  {
    senderId: 2,
    name: "Jerry",
    message:
      "Happy to hear from you after such a long time. sure! i be there at Boob for the party. cant wait to see you all.",
  },
];

const Message = ({ senderName, message, position = "left" }) => {
  return (
    <div className={`shadow-3 name-card ${position}`}>
      <p>{senderName}</p>
      <p>{message}</p>
    </div>
  );
};

function App() {
  return (
    <div>
      {messages.map((item, index) => (
        <Message
          key={`message-${index}`}
          senderName={item.name}
          message={item.message}
          position={item.senderId === owner ? "right" : "left"}
        />
      ))}
    </div>
  );
}
export default App;
