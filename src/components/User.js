import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../sass/components/user.scss'

const User = ({path}) => {

  const { id } = useParams()
  
  const initialUserState = {
    user: {},
    loading: true,
  }

  const [user, setUser] = useState(initialUserState)

  useEffect(() => {
    const getUser = async () => {
     
      const { data } = await axios(
        `https://api.github.com/users/${id}`
      )

      setUser(data)
    }

    getUser()
  }, []) 

  return user.loading ? (

    <div>Loading...</div>

  ) : (

      <div className="user-container">
        <div className="user-header">
          <img src={user.avatar_url} className="user-image"/>
          <h2>Username: {id}</h2>
        </div>
        <div className="user-body">
          <p>Number of public repos: {user.public_repos}</p>
          <p>{user.bio}</p>
          <a href={user.html_url}>{user.html_url}</a>
        </div>
      </div>
    
  )
}

export default User;