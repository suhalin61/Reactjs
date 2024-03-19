import React, { useState } from 'react'
import { alignPropType } from 'react-bootstrap/esm/types';

function BtnComponent() {
        const [count, setCount] = useState(0);
        const handleClick = () => {
            console.log("Button Clicked!");
            setCount(count + 1);
            console.log(`Button clicked: ${count}`);
        };
    return (
        <div>
            <h1>Button Componet</h1>
            <button className="btn"  onClick={handleClick}>
                Click Me </button>
            <p>count :{count}</p>
        </div>
    );
};

export default BtnComponent
