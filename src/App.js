import styles from 'App.module.scss';
import {
  BrowserRouter as Router,Route,
  Switch,
  Redirect
} from "react-router-dom"

import Header from "components/header/header";
import Footer from "components/footer/footer";
import Services from "pages/Services/services";
import ContactMe from "pages/ContactMe/contactme";
import Landing from "pages/Landing/landing";
import React,{Component} from 'react';

import {Grid} from 'semantic-ui-react';
class App extends Component {

  state = {}

  render(){
    return (
  
        <Grid className = {styles.customGrid} padded = "vertically">
          <Router>
            <Route component = {Header}/>
            <Switch>
                <Route exact path = "/" component = {Landing}/>
                <Route exact path = "/services" component = {Services}/>
                <Route exact path = "/contactme" component = {ContactMe}/>
                <Redirect from = "/home" to = "/"/>
                <Redirect from = "/*"  to = "/"/>
            </Switch>
            <Footer></Footer>
          </Router>
  
        </Grid>
  
    );

  }
}

export default App;
