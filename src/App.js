
import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { connect } from 'react-redux';
import contactsOperations from './redux/contacts/contacts-operations'
import contactsSelectors from './redux/contacts/contacts-selectors'
import AuthNav from './components/AuthNav'
 import HomeView from './views/HomeView'
 import RegisterView from './views/RegisterView'
import LoginView from './views/LoginView'
 import TodosView from './views/TodosView'
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'


class App extends Component {

  componentDidMount() {
    this.props.onGetCurretnUser();
  }


  render() {
    return (
      <div>
     <AppBar />
    
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView} />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView} />
          <PrivateRoute
            path="/contacts"
             redirectTo="/login"
            component={TodosView}
            />
       </Switch>
      </div>

 
    );
  }
}


const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};


export default connect(null, mapDispatchToProps)(App);