// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  const usernameInputRef = React.useRef()
  const [error, setError] = React.useState('')
  function handleSubmit(event) {
    event.preventDefault()
    const val = usernameInputRef.current.value
    onSubmitUsername(val)
  }
  function handleUsernameChange(event) {
    const val = usernameInputRef.current.value
    let isValid = val === val.toLowerCase()
    if (!isValid) {
      setError('Username must be lower case')
    } else {
      setError('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          ref={usernameInputRef}
          onChange={handleUsernameChange}
        />
      </div>
      <p role="alert" style={{color: 'red'}}>
        {error}
      </p>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
