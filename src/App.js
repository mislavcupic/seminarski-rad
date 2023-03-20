import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Messages from "./Components/Messages";
import { Navbar,Container,Row} from 'react-bootstrap';
import {uniqueNamesGenerator,adjectives,names} from 'unique-names-generator';
import Input from './Components/Input';


// proučiti ovaj paket https://www.npmjs.com/package/unique-names-generator
    // const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const name = uniqueNamesGenerator({ dictionaries: [adjectives, names] }); // big_red_donkey

   
    // const shortName = uniqueNamesGenerator({
    //   dictionaries: [adjectives, names], // colors can be omitted here as not used
    //   length: 2
    // }); // big-donkey



 const randomColor = () =>{
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16); //pretvorio u arrow funct
}


export default function App() {
  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState();
  const [member, setMember] = useState({
    username: name,
    color: randomColor(),
  });

  useEffect(() => {
    // Povezivanje sa Scaledroneom
    const drone = new window.Scaledrone("fbEWYCxtwTPuUsqf", {
      data: member,
    });

    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      member.id = drone.clientId;
      setMember(member);
    });

    const room = drone.subscribe("observable-chat");
    room.on("data", (data, member) => {
      setMessages((messages) => [...messages, { member, text: data }]);
    });

    setDrone(drone);
  }, [member]);

  // Slanje poruka, event sa Input.js - a u kojem je poslan txt iz input-a
  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-chat",
      message,
    });
  };

  return (
    <>
      <Navbar bg="dark" expand="xxl" className='justify-content-center text-white' >
      CHAT APPLICATION
     </Navbar>
     <Container>
        <Messages
          messages={messages}
          currentMember={member}
        /> 
       
        
        <Container ><Row className="fixed-bottom" class="row" >
          <hr></hr>  
         <Input  onSendMessage={onSendMessage} /> 
        </Row></Container>
      
      
      </Container>
      </>
  );
}




