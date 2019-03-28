import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal}) => {
    let protectedButtons = null;
    let authButtons = null;
    let borders = null;

    const toggleDropdown = () => {
        document.getElementById('user-dropdown').classList.toggle('show');
    };

    // window.onclick = function (e) {
    //     debugger
    //     if (!e.target.matches('.dropbtn')) {
    //         let myDropdown = document.getElementById("user-dropdown");
    //         if (myDropdown.classList.contains('show')) {
    //             myDropdown.classList.remove('show');
    //         }
    //     }
    // };

    if (currentUser) {
        borders = (
            <div className='vl'></div>
        );

        protectedButtons = (
            <>
                <div className='nav-icons'>
                    <a href='/'><i className="far fa-bell fas"></i></a>
                    <p>Notifications <i className="fa fa-caret-down"></i></p>
                </div>

                {borders}

                <div className="user-dropdown">
                    <div className='nav-icons'>
                        <i className="far fa-user fas dropbtn" onClick={toggleDropdown}></i>
                        <p>You <i className="fa fa-caret-down"></i></p>
                        <div className="dropdown-content" id='user-dropdown'>
                            <i className="fas fa-user"></i>
                            <a href="#">Michael</a>
                            <br/>
                            <button>View Profile</button>
                            <hr/>
                            <ul>
                                <a href='#'><li>Favorites</li></a>
                                <a href='#'><li>Conversations</li></a>
                                <a href='#'><li>Purchases and Reviews</li></a>
                                <a href='#'><li>Account Settings</li></a>
                                <hr/>
                                <a href='#'><li onClick={logout}>Sign out</li></a>
                            </ul>
                        </div>
                    </div>
                </div>

                {borders}
            </>
        );
    } else {
        authButtons = (
            <>
                <button
                    onClick={() => openModal('signup')}
                    className='auth-buttons'
                >
                    Register
                </button>

                <button
                    onClick={() => openModal('login')}
                    className='auth-buttons sign-in'
                >
                    Sign In
            </button>
            </>
        );
    }


    return (
        <nav className="nav">
            <div className="nav-left">
                <a href="/"><img src={window.navLogo} className='navLogo' /></a>
                
                <input 
                    type="text" 
                    placeholder="Search for items or shops"
                    className="search-text"
                />

                <button
                    className='search-button'
                >
                    Search
                </button>
            </div>

            <div className="nav-right">
                <button
                    className='auth-buttons'
                >
                    Sell on Petsy
                </button>
                {borders}
                {authButtons}

                <div className="nav-icons">
                    <a href='/'><i className="fas fa-briefcase"></i></a>
                    <p>Discover</p>
                </div>
                {borders}
                
                {protectedButtons}

                <div className="nav-icons">
                    <a href='/'><i className="fas fa-shopping-cart"></i></a>
                    <p>Cart</p>
                </div>
            </div>
        </nav>
    );

    // const loggedIn = () => (
    //     <button onClick={logout}>Log Out</button>
    // );

    // return currentUser ? loggedIn() : notLoggedIn();
};

export default Greeting;