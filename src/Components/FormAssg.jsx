import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';

function Form() {
    const [count, setCount] = useState([]);
    const btnClick = () => {
        setCount((Prev) => [...Prev, count.length])
    }
    const handleClick = (id) => {
        const newCount = count.filter((item, index) => index !== id);
        setCount(newCount.map((item, index) => +1));
    }

    return (
        <table className="table table-strped">
            <thead>
                <tr>

                    <th scope="col">S.No.</th>
                    <th scope="col">id</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quality</th>
                    <th scope="col">Total</th>
                    <button className="btn btn-primary" onClick={btnClick}></button>
                </tr>
            </thead>
            {
                count.map((item, index) => (
                    <tbody>
                        <tr key={index}>
                            <th scope="row">{item}</th>
                            <td></td>
                            <td>
                                Select Product Name
                            </td>
                            <td>  </td>
                            <td></td>
                            <td>Rs/-</td>
                            <td></td>
                            <td>Rs/-</td>
                            <button className='btn btn-primary' onClick={() => handleClick(index)}>-</button>
                        </tr>
                    </tbody>
                ))
            }
        </table>
    )
}


export default FormAssg
