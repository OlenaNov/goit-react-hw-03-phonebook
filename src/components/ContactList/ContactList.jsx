import PropTypes from 'prop-types';

import ContactsItem from "components/ContactsItem/ContactsItem";
import { List } from "./ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => {

    return (
        <List>
            <ContactsItem 
                contacts={contacts}
                onDeleteContact={onDeleteContact}
            />
        </List>
    )
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.object,
    ).isRequired
};