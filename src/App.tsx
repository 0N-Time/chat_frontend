import './App.css'
import Forms from "./Forms.tsx";
import Message, {MessageProps} from "./Components/Message.tsx";
import {client} from "./mqttClient.ts";
import {useState} from "react";
import thor_logo from './assets/thor_logo.png';

function App() {
    const [messages, setMessages] = useState<MessageProps[]>([])

    client.onMessageArrived = (msg) => {
        console.log(msg.destinationName, msg.payloadString);
        setMessages([
            ...messages,
            {
                user: "",
                text: msg.payloadString
            }
        ]);
    }

    client.onMessageDelivered = () => {
        console.log("Message delivered");
    }


  return (
    <>
        <div>
            <img className={"thor-logo"} src={thor_logo}/>
        </div>
        <div className={"message-window"}>
            {messages.map((m, i) => <Message key={i} user={m.user} text={m.text} />)}
        </div>

            <Forms send={client.send}/>
    </>
  );
}

export default App;
