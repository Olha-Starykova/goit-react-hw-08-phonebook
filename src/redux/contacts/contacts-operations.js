import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    // changeFilter,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './contacts-actions'



const fetchTodos = () => async dispatch => {
    dispatch(fetchContactRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactSuccess(data))
    } catch (error) {
        dispatch(fetchContactError(error))
    }
     // axios
    //     .get('/contacts')
    //     .then(({ data }) => dispatch(fetchContactSuccess(data)))
    //     .catch(error => dispatch(fetchContactError(error)));
} 

const addTodo = (name, number) => async dispatch => {
    const contacts = { name, number }
    dispatch(addContactRequest())

    try {
        const { data } = await axios.post('/contacts', contacts)
        dispatch(addContactSuccess(data))
    } catch (error) {
        dispatch(addContactError(error))
    }
    // axios
    //     .post('/contacts', contacts)
    //     .then(({ data }) =>
    //         dispatch(addContactSuccess(data)))
    //     .catch(error => dispatch(addContactError(error)));
};


const deleteTodo = contactId =>  dispatch => {
    dispatch(deleteContactRequest())

      axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error)));

};
    

export default {
    fetchTodos,
    addTodo,
    deleteTodo,
}