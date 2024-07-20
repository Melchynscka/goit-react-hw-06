import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import { selectNameFilter } from '../../redux/filtersSlice';
import css from "./ContactList.module.css";

export default function ContactList() {
    const filteredContacts = useSelector(selectNameFilter);
    return (
        <ul className={css.contactsList}>
            {filteredContacts.map(contact =>
                (<li  key={contact.id} className={css.contactListItem}>
                    <Contact data={contact} />
                </li>))}
        </ul>
    );
}