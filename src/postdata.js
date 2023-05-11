import React from "react";
import axios from "axios";

export default class Postdata extends React.Component {
  state = {
    user: ""
  };

  handleChange = (event) => {
    this.setState({ user: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.user
    };

    axios
      .post(`http://test1234567.epizy.com/post_action.php`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            user:
            <input type="text" name="user" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
