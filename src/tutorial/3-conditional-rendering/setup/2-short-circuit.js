import React, { useState } from 'react'

const ShortCircuit = () => {
  const [text, setText] = useState('hi')
  const [isError, setIsError] = useState(false)

  //const firstValue = text || 'hello world'
  //const secondValue = text && 'hello world'

  return (
    <>
      {/*<h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>*/}
      <h1>{text || 'joaco'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle error
      </button>
      {text && <h1>hello world</h1>}
      {/*isError && <h1>Error</h1>*/}
      {isError ? <h1>Error</h1> : <h1>No Error</h1>}
    </>
  )
}

export default ShortCircuit
