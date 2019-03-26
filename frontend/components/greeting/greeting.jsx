import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav>
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Register</Link>
        </nav>
    );

    const personalGreeting = () => (
        <button onClick={logout}>Log Out</button>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;