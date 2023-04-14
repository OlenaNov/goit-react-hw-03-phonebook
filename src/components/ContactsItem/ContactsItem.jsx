import PropTypes from 'prop-types';

import { DeleteItem, ElementContact, Name, Number } from "./ContactsItem.styled";

const ContactsItem = ({ contacts, onDeleteContact }) => {
    return contacts.map(({ id, name, number }) => 
                <ElementContact key={id}>
                    <Name>{name}</Name>
                    <Number>{number}</Number>
                    <DeleteItem type="button" onClick={() => onDeleteContact(id)}>x</DeleteItem>
                </ElementContact>
    )
};

export default ContactsItem;


ContactsItem.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
          ).isRequired
};