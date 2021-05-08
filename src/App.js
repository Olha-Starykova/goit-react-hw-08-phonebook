
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




  // componentDidMount() {
  //   this.props.fetchTodos();
  // }
  // const App = () => (
  

class App extends Component {

  componentDidMount() {
    this.props.onGetCurretnUser();
  }


  render() {
    return (
      <div>
     <AppBar />
        {/* <h1>Phonebook</h1>
        {this.props.isLoading && <h1>...Loading</h1>}
        <ContactForm />
        <h2>Contacts</h2>
        
        <Filter />
     
        <ContactList /> */}

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={TodosView} /> 
       </Switch>
      </div>

 
    );
  }
}


const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};
// const mapStateToProps = state => ({
//   isLoading: contactsSelectors.getLoading(state),
// })

// const mapDispatchToProps = dispatch => ({
// fetchTodos: ()=>dispatch(contactsOperations.fetchTodos())
// })

export default connect(null, mapDispatchToProps)(App);