import React, {useState} from 'react'
import sush from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(sush)
  return (
    <>
      <div>
          <h3>{people} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear all</button>
      </div>
    </>
  )
}

export default App
