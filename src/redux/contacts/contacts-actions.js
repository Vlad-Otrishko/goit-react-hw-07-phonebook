import { createAction } from '@reduxjs/toolkit';

 export const readContacts = createAction('contacts/readContacts');
 export const readContactsSuccess = createAction('contacts/readContactsSuccess');
 export const readContactsError = createAction('contacts/readContactsError');

 export const addContacts = createAction('contacts/addContacts');
export const addContactsSuccess = createAction('contacts/addContactsSuccess');
export const addContactsError = createAction('contacts/addContactsError');

 export const deleteContacts = createAction('contacts/deleteContacts');
 export const deleteContactsSuccess = createAction('contacts/deleteContactsSuccess');
 export const deleteContactsError = createAction('contacts/deleteContactsError');

 
//  const addItem = createAction('contacts/add');
//  const deleteItem = createAction('contacts/delete');
 export const filterItems = createAction('contacts/changeFilter');

