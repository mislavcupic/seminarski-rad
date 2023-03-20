import React from "react";
import { ListGroup } from "react-bootstrap";


export default function Messages (props) {

  const {messages,currentMember} = props;
    const renderMessage = (message) => {
      const {member, text} = message;
      const messageFromMe = member.id === currentMember.id;

      const className = messageFromMe ?
       "Messages-message currentMember" : "Messages-message";
        return (
          <ListGroup as="ul"  className={className}>
          <ListGroup.Item as="li"
            className="avatar"
            style={{backgroundColor: member.clientData.color}}
          />
            <ListGroup.Item as="li" className="Message-content">
              <ListGroup.Item as="li" className="username">
                {member.clientData.username}
              </ListGroup.Item>
              <ListGroup.Item as="li" className="text">{text}</ListGroup.Item>
            </ListGroup.Item>
          </ListGroup>
        );
      }



    return (
      <ul className="Messages-list">
        {messages.map((message) => renderMessage(message))}
        
      </ul>
    );
    
   
    }

