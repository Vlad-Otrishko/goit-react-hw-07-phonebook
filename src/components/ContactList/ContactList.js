import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/APIService';
import { readContactsRequest, deleteContactsRequest } from '../../redux/contacts/contacts-operations';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';


const ContactList = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(api.readContacts());
    dispatch(readContactsRequest());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []
  );


  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const normalizedFilter = filter.toLowerCase();
  const visibleList = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter));

    return (
      <ul className={s.list}>
        {visibleList.map(item => (
          <li key={item.id} className={s.line}>
            <Contact
              name={item.name}
              number={item.number}
            />
            <button
              type="button"
              className={s.deleteButton}
              onClick={() => dispatch(deleteContactsRequest(item.id))}
            ></button>
          </li>
        ))}
      </ul>
    );

};

export default ContactList;

