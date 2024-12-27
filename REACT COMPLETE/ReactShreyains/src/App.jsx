import React from 'react'

const App = () => {

  const a = 10;
  const user = 'Pankaj'

  return (
    <div>
      <h1>Hello {user}, {a}</h1>
      <h2>username is {user}</h2>
      <button>Change User</button>
    </div>
  )
}

export default App