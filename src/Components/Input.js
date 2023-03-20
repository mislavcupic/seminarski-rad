import React,{useState} from 'react'


//pretvorio u function i radi kad sve drugo bude class, ako mijenjam i App u App2 niš ne radi, kao i sa Messages
export default function Input({onSendMessage}) {
   
    const [txt,setTxt] = useState();
  
 const onChange = (e) => {
    if(e.target.value !== undefined){
    setTxt(e.target.value);
    }
    else{
        return;
    }
 }

 const onSubmit = (e) => {
    e.preventDefault();
    onSendMessage(txt);
    setTxt('');

    
    
 }
//  const handleBtnInput = () =>{
//    onSendMessage(txt);
//    setTxt('');

//  }
  /*
   <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
  */ 
  
    return (
    <div>
      <div className='Input'></div>
        <form onSubmit={(e) => onSubmit(e)}>
            <input 
            onChange ={(e)=> onChange(e)}
            value={txt}
            type="text"
            placeholder='Press ENTER and send your message...'
            autoFocus = {true}
            />
           <button type={'submit'}>Send</button>  {/*onClick={handleBtnInput} */}
        </form>
    </div>
  )
}




