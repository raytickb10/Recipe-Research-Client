import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <header className="App-header">    
            <h2>Log In to Recipe Researcher</h2>
            </header>
            <LoginForm />
            <div class="container signin">
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
