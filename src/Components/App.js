import React, { Component } from "react";
import { Menu, Tabs, Title } from "./Layouts";

export default class extends Component {
  render() {
    return (
      <fragment>
        <Menu />
        <Title />
        <Tabs />
      </fragment>
    );
  }
}
