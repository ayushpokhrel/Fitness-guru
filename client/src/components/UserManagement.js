// import axios from 'axios'
// import React, { useState } from 'react'

// const UserManagement = ({users}) => {
//     const{msg,setMsg}=useState('deleted');
 
//     const deleteUser=(userId)=>{
//         const confirmed=window.confirm("Are you sure you want to proceed")
//         if (confirmed){
//             axios.delete(`http://localhost:3005/users/${userId}`)
//         .then((response)=>{
//             // setMsg(response.data.msg)
//             // window.location.reload()
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//         }

//     }
//   return (
//     <div>
//         <h2>User management</h2>
//         <table border="1" cellSpacing="0">
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Username</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {users.map((user)=>{
//                     return(
//                     <tr key={user._id}>
//                         <td>{user.fname}</td>
//                         <td>{user.username}</td>
//                         <td>{user.email}</td>
//                         <td>{user.phone}</td>
//                         <td><button onClick={()=>deleteUser(user._id)}>Delete</button></td>
//                     </tr>
//                 );
//                 })}
//             </tbody>
//         </table>
//         {msg}
//     </div>
//   )
// }

// export default UserManagement   



import axios from 'axios';
import React, { useState, useEffect } from 'react';

const UserManagement = ({ users }) => {
  const [msg, setMsg] = useState('');
  const [userList, setUserList] = useState(users); // State to store user list

  // Function to delete a user
  const deleteUser = (userId) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');

    if (confirmed) {
      axios
        .delete(`http://localhost:3005/users/${userId}`)
        .then((response) => {
          setMsg('User deleted successfully');
          // Update the user list after deletion
          setUserList(userList.filter((user) => user._id !== userId));
        })
        .catch((error) => {
          console.log(error);
          setMsg('Error deleting user');
        });
    }
  };

  useEffect(() => {
    // Update userList when the 'users' prop changes
    setUserList(users);
  }, [users]);

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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.fname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => deleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {msg && <p>{msg}</p>}
    </div>
  );
};

export default UserManagement;

