import React, { useState } from 'react'


export const Dummy = () => {
    const [age,setage] = useState({name:"tina",age:20,ri:3})

    const updateeage = () =>{
        setage(prev=>{
            const newstate = {...prev}
            newstate["age"] = 25
            return newstate
        })
    }
  return (
    <>
    <div>{age}</div>
    <button onClick={updateeage}>{age}</button>
    </>
  )
}
