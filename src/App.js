import React, {useRef, useEffect, useState} from 'react';

function App () {
  const inputRef = useRef()
  const count = useRef(1)
  const [, setValue] = useState(false)

  const handleClick = () => {
    inputRef.current.focus()
    console.log('inputRef.current:', inputRef.current)
  }

  useEffect(() => {
    setTimeout(() => {
    console.log('Passed here')
      count.current = 300
      setValue(true)
    }, 3000)
  })

  return (
    <>
      <h1>
        Count value: {count.current}
      </h1>
      Focus: <input ref={inputRef} />
      <br />
      <button onClick={handleClick}>To focus</button>
    </>
  )
}

export default App;