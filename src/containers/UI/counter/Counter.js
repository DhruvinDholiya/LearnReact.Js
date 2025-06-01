import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../redux/action/counter.action';

function Counter() {
    const disptch = useDispatch();
    const counterVal = useSelector(state => state.counter);

    const handleIncre = () => {
        disptch(increment());
    }
    const handleDecre = () => {
        disptch(decrement());
    }
    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{margin: '50px 0'}}>Counter with "Redux"</h1>
            <button onClick={() => handleIncre()}>+</button>
            <span style={{minWidth: '50px', display: 'inline-block', textAlign: 'center'}}>{counterVal.count}</span>
            <button onClick={() => handleDecre()}>-</button>
        </div>
    );
}

export default Counter;