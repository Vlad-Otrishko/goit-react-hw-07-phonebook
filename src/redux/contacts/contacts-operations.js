import api from '../../services/APIService';
import {
    readContacts,
    readContactsSuccess,
    readContactsError,
    addContacts,
    addContactsSuccess,
    addContactsError,
    deleteContacts,
    deleteContactsSuccess,
    deleteContactsError,
} from './contacts-actions';

console.log(api.readContacts());


export const readContactsRequest = () => async dispatch=> {
    dispatch (readContacts());
try {
    const result = await api.readContacts();
    dispatch(readContactsSuccess(result));
} catch (error) {
    dispatch(readContactsError(error.message));
    }
}

export const addContactsRequest = (contact) => async dispatch=> {
    dispatch (addContacts());
try {
    await api.addContacts(contact);
    dispatch(addContactsSuccess(contact));
} catch (error) {
    dispatch(addContactsError(error.message));
    }
}

export const deleteContactsRequest = (contactId) => async dispatch=> {
    dispatch (deleteContacts());
try {
await api.deleteContacts(contactId);
    dispatch(deleteContactsSuccess(contactId));
} catch (error) {
    dispatch(deleteContactsError(error.message));
    }
}
