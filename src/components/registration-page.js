import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/" />;
    }
    return (
        <div className="home">
            <header className="App-header">    
            <h2>Register for Recipe Researcher</h2>
            </header>
            <RegistrationForm />
            <div className="container signin">
              <p>Already have an account? <Link to="/login">LOGIN</Link> </p>
              <p>Or return to homepage. <Link to="/">HOME</Link> </p>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
