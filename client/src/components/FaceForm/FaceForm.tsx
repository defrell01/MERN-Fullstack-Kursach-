import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FaceForm.sass'

const FaceForm = () => {
    return (
        <section id="main">
            <header id="header">
                <div className="container">
                    <div className="inner_header">
                        <img className="logo" src="Coin.svg" alt="" />
                        <div className="right_side_header">
                            <ul className="mnu_top">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Future plans</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <div className="main_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="info">
                                <div className='heading'> <div className='colored'>Easy way </div> to track <div className="colored">family finances </div></div>
                                <div className="info_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque molestias veritatis quasi blanditiis? Iste laudantium dolores nesciunt eius fugit, temporibus sapiente perferendis, ratione cupiditate beatae enim harum illo mollitia!</div>
                                <div className="btns">
                                    <button className="black_btn">Get started</button>
                                    <button className="blue_btn">Learn more</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img src="main_banner.svg" alt="main_bannner" className="mb_pic" />
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default FaceForm;