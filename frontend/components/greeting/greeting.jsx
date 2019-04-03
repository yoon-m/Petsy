import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal}) => {
    let protectedButtons = null;
    let authButtons = null;
    let borders = null;

    if (currentUser) {
        borders = (
            <div className='vl'></div>
        );

        protectedButtons = (
            <>
                <button
                    className='auth-buttons'
                >
                    <Link to='/sell'>Sell on Petsy</Link>
                </button>

                {borders}

                {/* <div className='nav-icons'>
                    <i className="far fa-bell fas"></i>
                    <p>Notifications <i className="fa fa-caret-down"></i></p>
                </div>

                {borders} */}

                <div id='flip'>
                    <div className='nav-icons'>
                        <div className='avatar-dropdown'>
                            <img src={window.defaultAvatar} className='avatar avatar-hover' />
                            <p>You <i className="fa fa-caret-down"></i></p>
                        </div>

                        <div className="dropdown-content" id='panel'>
                            <Link to='/profile'><div className='dropdown-content-top'>
                                <img src={window.defaultAvatar} className='avatar' />
                                {currentUser.first_name}
                                <br/>
                                <button>View Profile</button>
                            </div></Link>
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

                <div className="nav-icons">
                    <a href={`/#/cart/`}><i className="fas fa-shopping-cart"></i></a>
                    <p>Cart</p>
                </div>
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
        <nav className="nav" >
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
                {authButtons}

                <div className="nav-icons">
                    <a href='/'><i className="fas fa-briefcase"></i></a>
                    <p>Discover</p>
                </div>
                {borders}
                
                {protectedButtons}
            </div>
        </nav>
    );
};

export default Greeting;