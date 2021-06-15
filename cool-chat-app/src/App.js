import React, {useEffect, useState} from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.js";
import Chat from "./components/Chat.js";
import {ChakraProvider} from "@chakra-ui/react";
import Pusher from "pusher-js";
import axios from "./axios";
import GoogleLogin from "./components/GoogleLogin";
import {useStateValue} from "./StateProvider";

function App() {
    const [{user}, dispatch] = useStateValue();

    const [messages, setMessages] = useState([]);

    useEffect(() => {

        if (user != null)

            axios.post("/messages/sync", {
                collectionName: user.displayName,
            }).then(response => {

                setMessages(response.data)
            });

    }, [messages, user]);

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

    if (user != null) console.log(user.photoURL);

    return (
        <ChakraProvider>
            {!user ? (
                <GoogleLogin/>
            ) : (
                <div className="app">
                    <div className="app__body">
                        <Sidebar/>
                        <Chat
                            messages={messages}
                            pfp_url={user.photoURL}
                            name={user.displayName}
                            last_time_seen="Last seen 30 Minutes ago.."
                        />
                    </div>
                </div>
            )}
        </ChakraProvider>
    );
}

export default App;
