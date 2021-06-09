import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat.js";
import { ChakraProvider } from "@chakra-ui/react";
import Pusher from "pusher-js";

function App() {
  useEffect(() => {}, []);

  useEffect(() => {
    const pusher = new Pusher("7a8d350eb42175e7d33b", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <ChakraProvider>
      <div className="app">
        <div className="app__body">
          <Sidebar />
          <Chat
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
