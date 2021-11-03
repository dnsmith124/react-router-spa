import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import axios from 'axios'

const UserPage = (props) => {
  
  const initialUserState = {
    user: {},
    loading: true,
  }

  const [user, setUser] = useState(initialUserState)

  useEffect(() => {
    const getUser = async () => {
     
      const { data } = await axios(
        `https://api.github.com/users/${props.match.params.id}`
      )

      setUser(data)
    }

    getUser()
  }, []) 
  console.log(user);

  return user.loading ? (

    <div>Loading...</div>

  ) : (

    <Layout pageTitle={user.name}>
      <div className="info-container">
        <img src={user.avatar_url} />
        <h2>Username: {props.match.params.id}</h2>
        <p>Number of public repos: {user.public_repos}</p>
        <p>{user.bio}</p>
        <a href={user.html_url}>{user.html_url}</a>
      </div>
    </Layout>
    
  )
}

export default UserPage;