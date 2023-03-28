import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthUser = () => {
    const [authUser, setAuthUser] = useState(null)
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if(user){
          setAuthUser(user);
        }else{
           setAuthUser(null);
        }
      });
      return () => {
        listen();
      }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Signout Succesfully');
        }).catch(error => console.log(error));
    }
  return (
    <div>
        {
            authUser ? <><p>User Mail: {authUser.email}</p> <button onClick={userSignOut}> Sign Out</button></>: <p>No User</p>
        }
    </div>
  )
}

export default AuthUser