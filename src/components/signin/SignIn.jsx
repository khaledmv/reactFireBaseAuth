import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
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
        <h1> Sign In Form</h1>

        <form className='form' onSubmit={handleChange}>
            <div className='form-group'>
                <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='form-group'>
                <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            <div>
                <button type="submit"> Login </button>
            </div>

        </form>
    </div>
  )
}

export default SignIn