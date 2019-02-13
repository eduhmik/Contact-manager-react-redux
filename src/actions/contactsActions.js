import { GET_CONTACTS, GET_CONTACT, ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from './types';
import axios from 'axios';


export const getContacts = () => async dispatch => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
};

export const getContact = (id) => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: GET_CONTACT,
        payload: res.data
    });
};

export const addContact = (contact) => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', contact);
    dispatch ({
        type: ADD_CONTACT,
        payload: res.data
    });
};

export const deleteContact = (id) => async dispatch => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    });
};

export const updateContact = (contact) => async dispatch => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact)
    dispatch ({
        type: UPDATE_CONTACT,
        payload: res.data
    });
};