import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div className="home">
        <div className="back-header"></div>
            <header className="App-header">    
            <h2>Log In to <br/> Recipe Researcher</h2>
            </header>
            <LoginForm />
            <div className="container signin">
              <p>Don't have an account? <Link to="/register">REGISTER</Link> </p>
              <p>Or return to homepage. <Link to="/">HOME</Link> </p>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
