import React from "react";

export default class data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      cellphone: "",
    };
  }
  render() {
      return(
          <input value={this.state.name}>
              nome:
          </input>
      )
  }
}
