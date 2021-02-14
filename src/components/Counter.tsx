import { count } from 'console'
import React, { useState } from 'react'

export const Counter = () => {

    const [counter, setCounter] = useState(0)

   const incrementat = (number: number):void =>{
        setCounter(counter +number)
   }
    return (
        <div className="mt-5">
            <h3>Counter:</h3>
            <span>Valor: {counter}</span>
            <br/>
            <button
            onClick={()=>incrementat(2)}
            >+</button>
        </div>
    )
}
