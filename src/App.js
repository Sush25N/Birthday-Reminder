import React, {useState} from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data)
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
