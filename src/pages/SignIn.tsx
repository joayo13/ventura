import React, { useState } from 'react';
import '../App.css';
import { auth } from '../services/firebase';
import AnimatedLink from '../components/AnimatedLink';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.startViewTransition(() => {
                flushSync(() => {
                  navigate("/");
                });
              });
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(`${errorMessage}`)
        });
    };

    return (
        <div className='min-h-[calc(100vh-4rem)] bg-stone-950 flex items-center justify-center text-orange-400'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='w-44 text-red-400'>{error}</div>
            <div>
                <label className='block'>Email</label>
                <input
                    className='bg-stone-900 border border-orange-400 rounded-sm indent-2'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label className='block'>Password</label>
                <input
                    className='bg-stone-900 border border-orange-400 rounded-sm indent-2'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button className='bg-orange-800 w-fit mx-auto text-stone-200 px-4 py-2 rounded-sm' type="submit">
                Sign In
            </button>
            <AnimatedLink className='block underline mx-auto' to={"/sign-up"}>Haven't signed up yet?</AnimatedLink>
        </form>
        </div>

    );
}

export default SignIn;
