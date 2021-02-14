
import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const [segundos, setSegundos] = useState(0)

    useEffect(() => {
        setInterval(()=> {
            setSegundos(segundos => segundos +1)
        },1000)
    }, []);
    return (
        <div>
            <h4>Timer: <small>{segundos}</small></h4>

        </div>
    )
}
