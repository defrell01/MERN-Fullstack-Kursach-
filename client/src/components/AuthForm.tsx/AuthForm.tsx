import './AuthForm.sass'
import { observer } from 'mobx-react-lite';
import { FC, useContext, useState } from 'react';
import { Context } from '../../index'


const AuthForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { store } = useContext(Context)

    return (
        <div className="wrapper">
            <section id="main">
                <header id="header">
                    <div className="container">
                        <div className="inner_header">
                            <img className="logo" src="Coin.svg" alt="" />
                        </div>
                    </div>
                </header>

                <div className="form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <img src="guy1.svg" alt="" className="guy" />
                            </div>

                            <div className="col-lg-6">
                                <div className="box">
                                    <div className="get_started">Get started</div>
                                    <div className="line"></div>

                                    <div className="auth">
                                        <input
                                            className='auth_inp'
                                            onChange={e => setEmail(e.target.value)}
                                            value={email}
                                            placeholder='e-mail'
                                            type="text"
                                        />

                                        <input
                                            className="auth_inp"
                                            onChange={e => setPassword(e.target.value)}
                                            value={password}
                                            type="password"
                                            placeholder='password'
                                        />

                                        <button
                                            className="reg_btn"
                                            onClick={() => store.login(email, password)}>
                                            Log in
                                        </button>
                                        <button className="auth_btn"
                                            onClick={() => store.registration(email, password)}>
                                                Register
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <img src="guy2.svg" alt="" className="guy" />
                            </div>
                        </div>
                    </div>
                </div>

                <footer id="footer">
                    <div className="container">
                        <a href="https://github.com/defrell01">
                            <img src="github.svg" alt="" className="credentials" />
                            <div className="defrell">defrell01</div>
                        </a>
                    </div>
                </footer>


            </section>
        </div>
    );
};

export default observer(AuthForm);