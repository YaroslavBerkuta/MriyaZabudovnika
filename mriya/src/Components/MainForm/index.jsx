import React from "react";
import { Component } from "react";
import axios from "axios";

const API_PATH = "https://blagovischenska.com/main.php";

class MainForm extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_phone: "",
      user_select: "",
      button: "Надіслати",
      dissable: false,
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
          button: "Надіслано",
          dissable: true
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  };
  render() {
    return (
      
      <section className="main__form">
        <div className="container">
          <div className="form__flex">
            <div className="form__title">
              <h2 className="title">ЗАМОВИТИ ДЗВІНОК</h2>
              <p className="form__description">
                Замовити заміри, доставку, отримати інформацію про
                металопластикові вироби, міжкімнатні та вхідні двері, секційні
                ворота, замір, монтаж - заповніть форму і менеджер зважиться з
                вами найближчим часом
              </p>
            </div>
            <div className="form__main">
              <form className="main-form" onSubmit={(e)=>console.log(e)} >
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="Ім`я"
                  className="form__main-input"
                  onChange={(e) => this.setState({ user_name: e.target.value })}
                  disabled={this.state.dissable}
                />
                <input
                  type="tel"
                  name="user_phone"
                  id="user_phone"
                  placeholder="Номер телефону"
                  className="form__main-input"
                  onChange={(e) =>
                    this.setState({ user_phone: e.target.value })
                  }
                  disabled={this.state.dissable}
                />
                <select
                  className="form__main-input"
                  name="user_select"
                  id="user_select"
                  onChange={(e) =>
                    this.setState({ user_select: e.target.value })
                  }
                  disabled={this.state.dissable}
                >
                  <option>Вас цікавить..</option>
                  <option value="Металопластикові вироби">
                    Металопластикові вироби
                  </option>
                  <option value="Міжкімнатні та вхідні двері">
                    Міжкімнатні та вхідні двері
                  </option>
                  <option value="Секційні ворота">Секційні ворота</option>
                  <option value="Замір">Замір</option>
                  <option value="Монтаж">Монтаж</option>
                </select>
                <input
                  type="submit"
                  value={this.state.button}
                  className="form__main-btn"
                  id="sendMail"
                  onClick={(e) => this.handleFormSubmit(e)}
                  disabled={this.state.dissable}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainForm;
