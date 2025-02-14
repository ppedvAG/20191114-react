import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './m81ReduxCounter/components/Counter'
import counter from './m81ReduxCounter/reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)