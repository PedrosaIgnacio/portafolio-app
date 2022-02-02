import React, { useState } from 'react'
import { getUserId } from '../../helpers/GetInstagramUser'

const InstagramApp = () => {
  const [user, setUser] = useState({ username: '', userid: 0 })
  const [username, setUsername] = useState('')
  const userIdClick = () => {
    const userId = getUserId(username)
    userId.then(({ username, user_id }) =>
      setUser({ username: username, userid: user_id }),
    )
  }

  const inputV = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }

  return (
    <>
      <div className="form-group mt-4 col-md-4">
        <label className="form-label lead">Instagram Username</label>
        <input
          className="form-control"
          placeholder="Enter your Instagram Username"
          onChange={inputV}
        />
        <div className="mt-4">
          <button className="btn btn-primary" onClick={userIdClick}>
            TEST
          </button>
          <h2>{username}</h2>
          <h3>{user.username + ' ' + user.userid}</h3>
        </div>
      </div>
    </>
  )
}

export default InstagramApp
