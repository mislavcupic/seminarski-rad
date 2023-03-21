import React from "react";
import { Col, Row } from "react-bootstrap";


export default function Messages (props) {

  const {messages,currentMember} = props;
    const renderMessage = (message) => {
      const {member, text} = message;
      const messageFromMe = member.id === currentMember.id;

      const className = messageFromMe ?
       "Messages-message currentMember" : "Messages-message";
        return (
          <Col  className={className} >
          <Row
            className="avatar"
            style={{backgroundColor: member.clientData.color}}
          />
            <Row className="Message-content">
              <Row className="username">
                {member.clientData.username}
              </Row>
              <Row className="text">{text}</Row>
            </Row>
          </Col>
        );
      }



    return (
      <Col className="Messages-list">
        {messages.map((message,index)  =><Row key={index}>{renderMessage(message)}</Row> )}
        
      </Col>
    );
    
   
    }

