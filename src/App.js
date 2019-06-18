import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Route, withRouter, NavLink} from 'react-router-dom';

import Form from "./components/Form";
import Recipes from "./components/Recipes";
import HeaderBar from './components/header-bar';

const API_KEY = "77a7004e5b982cb54e8e0b5031e70162";

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=9`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  
  constructor(){
    super();
    let value = '';
    let showoff = 'hidden';
    let noshow = 'visible';
    if(localStorage.getItem('userName') !== null){
      value = 'Welcome, ' + localStorage.getItem('userName');
      showoff = 'visible';
      noshow = 'hidden';
    }
    else{
      value = '';
      showoff = 'hidden';
      noshow = 'visible';
    }
    this.state = {
      myText: value,
      showandtell: showoff,
      explanation: noshow
   }
 }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Researcher</h1>
          <div className="welcome_text"><p  id="testing_text" >{this.state.myText}</p></div>
          <HeaderBar />
          <div style={{visibility: this.state.explanation}}>
            <NavLink exact to="/login" className="link_button" id="login_text" >Log In / Register</NavLink>
          </div>
        </header>
        <Form getRecipe={this.getRecipe} />
        <h2 className="explain_text" style={{visibility: this.state.explanation}}>MUST BE LOGGED IN TO VIEW RECIPES</h2>
        <div style={{visibility: this.state.showandtell}}>
          <Recipes recipes={this.state.recipes} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
