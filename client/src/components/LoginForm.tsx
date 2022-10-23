import React, { FC, useContext, useState } from 'react';
import { Context } from '../index'

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { store } = useContext(Context)

    return (
        <div>

            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />

            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Password'
            />

            <button onClick={() => store.login(email, password)}>
                Log in
            </button>

            <button onClick={() => store.registration(email, password)}>
                Register
            </button>
        </div>
    );
};

export default LoginForm;