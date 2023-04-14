import { Component } from "react";

import { Form, Input, Label, SubmitContact } from "./ContactForm.styled";

class ContactForm extends Component {

        state = {
                name: '',
                number: '',
              };

        changeInput = e => {
          this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
          });
        }; 

        handleSubmit = e => {
                const { name, number } = this.state;
                e.preventDefault();

                this.props.onAddContact(name, number);
                this.resetForm();
        };

        resetForm = () => {
                this.setState({
                  name: '',
                  number: '',
                        });
                };
              
        render() {
                const { name, number } = this.state;

                return (
                        <Form onSubmit={this.handleSubmit}>
                        <Label> Name
                        <Input type="text"
                                name="name"
                                value={name}
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                required 
                                onChange={this.changeInput}
                                />
                        </Label>
                        <Label> Number
                        <Input
                                type="tel"
                                name="number"
                                value={number}
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                required
                                onChange={this.changeInput}
                                />
                        </Label>
                        <SubmitContact type="submit">Add contact</SubmitContact>
                        </Form>
                )
        }
    };

    export default ContactForm;