import React,{useState} from 'react'
import {Button,FormControl,FormGroup,InputGroup} from 'react-bootstrap'


//pretvorio u function i radi kad sve drugo bude class, ako mijenjam i App u App2 niš ne radi, kao i sa Messages
export default function Input({onSendMessage}) {
   
    const [txt,setTxt] = useState('');
  
 const onChange = (e) => {
    setTxt(e.target.value);
 }

    const onSubmit = (e) => {
      e.preventDefault();
      if(txt.length<1){
        alert('You should write something before sending message!');
      }
      onSendMessage(txt);
      setTxt("");
  
    
 }




  
  
    return (
    //pretvorio u bootstrap ipak formu (ostavio root obične forme da mogu puknut onSubmit()), pomoću inputgrupe sam spojio ovaj aria-describedby sa id -jem buttona kojeg želim prikeljiti inputboxu
<form onSubmit={(e)=>onSubmit(e)}>
<FormGroup  role="form" value={txt} onChange={(e)=>onChange(e)}>
   <InputGroup > 
      <FormControl aria-describedby="button-addon1" type="text" value={txt} size="lg" className="Input" placeholder="Please ENTER and send your message..."/>
        <Button className="btn-large" variant="outline-secondary" id='button-addon1' type="submit" >Send</Button>
    </InputGroup>
  </FormGroup>
</form>
  )
}




