
const url = 'https://618eda9450e24d0017ce14a1.mockapi.io/contacts';
const readContacts = () => {
    return fetch(url).then(res => res.json());
      }
const addContacts = (contact) => {
    console.log('contact=', JSON.stringify(contact));
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  })
}

    const deleteContacts = contactId => {
        return fetch(url+'/'+contactId, {
        method: 'delete',
    }
    ).then(res=>res.json());

    }

    // eslint-disable-next-line import/no-anonymous-default-export
    const api = { readContacts, addContacts, deleteContacts };
    export default api;