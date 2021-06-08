import "./App.css";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat.js";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
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
