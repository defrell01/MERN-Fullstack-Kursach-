import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AuthForm.sass'


const AuthForm = () => {
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
                                <div className="btns">
                                    <button className="signin">Sign in</button>
                                    <button className="signup">Sign up</button>
                                </div>
                                <div className="line"></div>
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

export default AuthForm;