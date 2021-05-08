// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Container from '../components/Container';
// import TodoList from '../components/TodoList';
// import TodoEditor from '../components/TodoEditor';
// import Filter from '../components/TodoFilter';
// import Stats from '../components/Stats';
// import Modal from '../components/Modal';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { todosOperations, todosSelectors } from '../redux/todos';


// const barStyles = {
//   display: 'flex',
//   alignItems: 'flex-end',
//   marginBottom: 20,
// };

// class TodosView extends Component {
//   state = {
//     showModal: false,
//   };

//   componentDidMount() {
//     this.props.fetchTodos();
//   }

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { showModal } = this.state;

//     return (
//       <Container>
//         <div style={barStyles}>
//           <Filter />
//           <Stats />
//           <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
//             <AddIcon width="40" height="40" fill="#fff" />
//           </IconButton>

//           {this.props.isLoadingTodos && <h1>Загружаем...</h1>}
//         </div>

//         <TodoList />

//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <TodoEditor onSave={this.toggleModal} />
//           </Modal>
//         )}
//       </Container>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoadingTodos: todosSelectors.getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchTodos: () => dispatch(todosOperations.fetchTodos()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
import React, { Component } from 'react';
 import ContactForm from '../components/ContactForm/ContactForm';
 import ContactList from '../components/ContactList/ContactList';
 import Filter from '../components/Filter/Filter';
 import { connect } from 'react-redux';
 import contactsOperations from '../redux/contacts/contacts-operations'
 import contactsSelectors from '../redux/contacts/contacts-selectors'

//  import RegisterView from './views/RegisterView'
// import LoginView from './views/LoginView'
// // import TodosView from './views/TodosView'
// import { Switch, Route } from 'react-router-dom';
// import AppBar from './components/AppBar';


class TodosView  extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }
  // const App = () => (
  render() {
    return (
      <div>
   
        <h1>Phonebook</h1>
        {/* {this.props.isLoading && <h1>...Loading</h1>} */}
        <ContactForm />
        <h2>Contacts</h2>
        
         <Filter />
     
        <ContactList /> 

  
      </div>

 
    );
  }
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
fetchTodos: ()=>dispatch(contactsOperations.fetchTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosView );


// const mapStateToProps = state => ({
//   isLoading: contactsSelectors.getLoading(state),
// })

// const mapDispatchToProps = dispatch => ({
// fetchTodos: ()=>dispatch(contactsOperations.fetchTodos())
// })

// export default TodosView ;