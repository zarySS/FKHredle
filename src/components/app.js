import React, { Component } from 'react';
import { setTitle } from "../actions/global.action";
import HeaderTemplate from "./templates/header.template";
import PlayersList from "./modules/players.module";
import Header from "./header";
import Example from "./navbar";

export default class App extends Component {
  
  state = {
    title: "default Title",
  }
  render() {
    const {title} = this.state;
    return (<div>
      <Example />
      <Header value={title} />
      <HeaderTemplate />

      <PlayersList />

    </div>);
  }
}