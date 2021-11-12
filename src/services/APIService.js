
const url = 'http://localhost:4040/contacts';
const readContacts = () => {
    return fetch(url).then(res => res.json());
        // .then(console.log);
      }
const addContacts = (contact) => {
    console.log('contact=', JSON.stringify(contact));
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: contact,
    })
      .then(res => res.json())
      .then(console.log);
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