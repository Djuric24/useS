import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'John', age:22, message: 'new message' 
  });

  const [name,setName] = useState('Peter');
  const [age,setAge] = useState('24');
  const [message,setMessage] = useState('random message');

  const changeMessage = () => {
    // setPerson({...person, message:'Hello World'});
    setMessage('hello world')
  };

  return (
    <>
      <h2>useState object example</h2>;
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{message}</h2>
      <button className='btn' onClick={changeMessage} > change message</button>
    </>
)
};

export default UseStateObject;
