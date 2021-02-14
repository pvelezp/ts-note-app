import React, { useState } from 'react'

interface User {
    uid: number | undefined
    name: string
}

function Usuario() {

    const [user, setUser] = useState<User>({
        uid:undefined,
        name:''
    })

    const login = () => {
        setUser({
            uid: Date.now(),
            name:'Pablo Vélez'
        })
    }
    return (
        <div>
            <h2>Usuario</h2>
            <button
            onClick={login}
            >Login</button>
            <p>{user.name || ''}</p>
        </div>
    )
}

export default Usuario
