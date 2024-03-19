import React, { useState } from 'react'

function LiAssg() {
   const[Count, setCount] =useState([]);
    const btnClick = () =>{
        setCount((prev)=>[...prev, Count.length])
    }
    return (
        <>
            <div className='text-center'>
                <h1>Component</h1>
                <button className='btn btn-primary mt-2' onClick={btnClick}>Click Me </button>
                <ul className='list-unstyled mt-5'>
                {
                Count.map((item,index)=>( 
                <li>Count :{item}</li>
                ))
                }
                </ul>
            </div>
        </>
    )
}

export default LiAssg
