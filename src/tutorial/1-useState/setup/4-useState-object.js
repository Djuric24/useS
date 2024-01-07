import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'John', age:22, message: 'new message' 
  });
  const changeMessage = () => {
    setPerson({...person, message:'Hello World'});
  };

  return (
    <>
      <h2>useState object example</h2>;
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className='btn' onClick={changeMessage} > change message</button>
    </>
)
};

export default UseStateObject;
