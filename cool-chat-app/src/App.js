import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat.js";
import { ChakraProvider } from "@chakra-ui/react";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("7a8d350eb42175e7d33b", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <ChakraProvider>
      <div className="app">
        <div className="app__body">
          <Sidebar />
          <Chat
            messages={messages}
            pfp_url="https://bit.ly/sage-adebayo"
            name="Shakil Hassim"
            last_time_seen="Last seen 30 Minutes ago.."
          />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
