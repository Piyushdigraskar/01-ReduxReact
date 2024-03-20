
import classes from './Counter.module.css';
import { counterActions } from '../Store/index';
import { useSelector , useDispatch} from 'react-redux';
// import { connect } from 'react-redux';
// import { Component } from 'react';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = ()=>{
    dispatch(counterActions.increment());
  }
  const increaseHandler = ()=>{
    dispatch(counterActions.increase(2));
  }
  const decreaseHandler = ()=>{
    dispatch(counterActions.decrease(2));
  }
  const decrementHandler = ()=>{
    dispatch(counterActions.decrement());
  }
  

return (
  <main className={classes.counter}>
    <h1>Redux Counter</h1>
    {show && <div className={classes.value}>{counter}</div>}
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>increaseBy2</button>
      <button onClick={decreaseHandler}>decrementby2</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
    <button onClick={toggleCounterHandler}>Toggle Counter</button>
  </main>
);

  
};

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   };
//   decrementHandler() {
//     this.props.decrement();
//   };
//   toggleCounterHandler() {};

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   } 
// }

// const mapStateToProps = state =>{
//   return {
//     counter: state.counter 
//   }
// }

// const mapDispatchtoProps = dispatch =>{
//   return {
//     increment : ()=>dispatch({type: 'increment'}),
//     decrement : ()=>dispatch({type: 'decrement'}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchtoProps) (Counter);

export default Counter;
