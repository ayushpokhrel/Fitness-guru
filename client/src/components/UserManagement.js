import axios from 'axios'
import React, { useState } from 'react'

const UserManagement = ({users}) => {
    const{msg,setMsg}=useState('deleted');
    const deleteUser=(userId)=>{
        axios.delete(`http://localhost:3005/users/${userId}`)
        .then((response)=>{
            // setMsg(response.data.msg)
            // window.location.reload()
        })
        .catch((error)=>{
            console.log(error)
        })

    }
  return (
    <div>
        <h2>User management</h2>
        <table border="1" cellSpacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>{
                    return(
                    <tr key={user._id}>
                        <td>{user.fname}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><button onClick={()=>deleteUser(user._id)}>Delete</button></td>
                    </tr>
                );
                })}
            </tbody>
        </table>
        {msg}
    </div>
  )
}

export default UserManagement   