import React from 'react';

function Footer() {
    return (
        <>
            <div className='footer'>
                <img src="../icons_assets/Logo.svg" alt="" />

                <div className='foot_links'>
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="menu">Menu</a></li>
                        <li><a href="reservations">Reservations</a></li>
                        <li><a href="order">Order Online</a></li>
                        <li><a href="login">Login</a></li>
                    </ul>

                </div>

                <div className='foot_contact'>
                    <h3>Contact</h3>
                    <p>Adress</p>
                    <p>Phone</p>
                    <p>email</p>
                </div>

                <div className='social'>

                </div>


            </div>


        </>

    )
};

export default Footer;