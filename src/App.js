import React, {Component} from 'react';
import Counter from './Counter';

const Buttons = ({ increment, decrement, count}) => (
  <div>
    <h1>Actual value: {count}</h1>
    <div>
      <button onClick={increment}>Add 1</button>
    </div>
    <div>
      <button onClick={decrement}>Remove 1</button>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <Counter render={
          ({increment,decrement, count}) => (
            <Buttons
              increment={increment}
              decrement={decrement}
              count={count}
            />
          )
        }>

        </Counter>
      </div>
    )
  }
}

export default App;