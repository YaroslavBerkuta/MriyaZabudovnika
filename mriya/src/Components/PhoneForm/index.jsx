import React from "react";
import { Component } from "react";
import axios from "axios";

const API_PATH = "https://blagovischenska.com/phone.php";

class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
    };
  }

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
        console.log(result.data)
      })
      .catch((error) => this.setState({ error: error.message }));
  };
  render() {
    return (
        <form action="" method="post">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Вкажіть ваш номер телефону"
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
              <button type="submit" onClick={(e) => this.handleFormSubmit(e)}>Надіслати</button>
        </form>
     
    );
  }
}

export default Phone;




