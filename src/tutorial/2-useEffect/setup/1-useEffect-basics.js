import React, { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call useEffect')
    if (value >= 1) {
      document.title = `New Messages (${value})`
    }
  }, [value])

  useEffect(() => {
    console.log('hello world')
  }, [])

  console.log('Render component')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click
      </button>
    </>
  )
}

export default UseEffectBasics
