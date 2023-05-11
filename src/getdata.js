import React from "react";

import axios from "axios";

export default class Getdata extends React.Component {
  state = {
    test: []
  };

  componentDidMount() {
    axios.get(`http://test1234567.epizy.com/get_action.php`).then((res) => {
      const test = res.data;
      this.setState({ test });
    });
  }

  render() {
    return (
      <ul>
        {this.state.test.map((person) => (
          <li>{test.user}</li>
        ))}
      </ul>
    );
  }
}
