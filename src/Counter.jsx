import React, { useState, useEffect } from 'react'


function Counter() {
    useEffect(() => {

    })
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}></button>
            < h1 > heloi: {count}</h1 >
        </div>
    )
}

export default Counter
