import React, { useState } from 'react'
// import datas from '../Utilities/data.js'
import data from '../Utilities/data.js'



function CaRd() {
    const [count, setCount] = useState([]);
    const allClick = () => {
        const datas = data.filter((item) => item);
        setCount(datas);
    }
    const flowerClick = () => {
        const datas = data.filter((item) => item.category == 'flower')
        setCount(datas)
    }
    const vegClick = () => {
        const datas = data.filter((item) => item.category == 'vegetable')
        setCount(datas)
    }
    const fruitClick = () => {
        const datas = data.filter((item) => item.category == 'fruit')
        setCount(datas)
    }
    const animalClick = () => {
        const datas = data.filter((item) => item.category == 'animal')
        setCount(datas)
    }
    const resetClick = () => {
        setCount([])
    }

    return (
        <>
            <div className="container text-center mt-5 ">
                <button className='btn btn-warning mx-3' onClick={allClick}>All</button>
                <button className='btn btn-warning mx-3' onClick={flowerClick}>Flower</button>
                <button className='btn btn-warning mx-3' onClick={vegClick}>Vegetables</button>
                <button className='btn btn-warning mx-3' onClick={fruitClick}>Fruits</button>
                <button className='btn btn-warning mx-3' onClick={animalClick}>Animal</button>
                <button className='btn btn-warning mx-3' onClick={resetClick}>Reset</button>

            </div>

            <div className='d-flex flex-wrap'>
                {
                    count.map((element) => (
                        <div className="card my-5 mx-3" style={{ width: '18rem' }} key={element.id}>
                            <img src={element.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title fw-bold">{element.category}</h4>
                                <p className="card-text text-secondary font-monospace">{element.description}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default CaRd
