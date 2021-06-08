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
          <Chat />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
