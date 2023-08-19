import classes from './Counter.module.css';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch=useDispatch();
  const counter= useSelector(state=>state.counter)
  const toggleCounterHandler = () => {};
const incrementHandler=()=>{
  dispatch({type:"increment"});
}
const decrementHandler=()=>{
  dispatch({type:"decrement"});
}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>increment by 2</button>
      <button onClick={decrementHandler}>decrement by 2</button>

    </main>
  );
};

export default Counter;
