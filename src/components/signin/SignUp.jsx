import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                console.log(userCredential);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
     
    }

  return (
    <div>
        <h1> Sign Up Form</h1>

        <form className='form' onSubmit={signUp}>
            <div className='form-group'>
                <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='form-group'>
                <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            <div>
                <button type="submit"> SignUp </button>
            </div>

        </form>
    </div>
  )
}

export default SignUp