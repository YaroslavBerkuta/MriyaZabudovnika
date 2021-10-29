import React from "react";
import { Component } from "react";
import axios from "axios";


const API_PATH = "https://blagovischenska.com/contact.php";


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact_name: "",
            contact_phone: "",
            contact_msg: "",
        };
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            url: `${API_PATH}`,
            data: this.state,
        })
            .then((result) => {
                this.setState({
                    mailSent: result.data.sent,
                });
            })
            .catch((error) => this.setState({ error: error.message }));
    };
    render() {
        return (
            <div className="contact__form">
                <h3>Залиште нам повідомлення</h3>
                <form action="">
                    <div className="form__top">
                        <input type="text" placeholder="Ім’я" name="contact_name" id='contact_name' onChange={(e) => this.setState({ contact_name: e.target.value })}/>
                        <input type="tel" placeholder="Номер телефону" name='contact_phone' id='contact_phone' onChange={(e) => this.setState({ contact_phone: e.target.value })}/>
                    </div>
                    <textarea placeholder="Повідомлення" name='contact_msg' id='contact_msg' onChange={(e) => this.setState({ contact_msg: e.target.value })}></textarea>
                    <button type="submit"  onClick={(e) => this.handleFormSubmit(e)}>Надіслати</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;





