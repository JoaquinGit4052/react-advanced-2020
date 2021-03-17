import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarsons'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json()
        } else {
          setIsLoading(false)
          setIsError(true)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => setIsError(true))
  }, [])

  if (isLoading) {
    return (
      <>
        <h2>loading...</h2>
      </>
    )
  }

  if (isError) {
    return (
      <>
        <h2>Error...</h2>
      </>
    )
  }

  return <h2>{user}</h2>
}

export default MultipleReturns
