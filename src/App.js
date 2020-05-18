import React from "react";
import { Component } from "react";
import "./styles.css";
import data from "./data.json";
import Item from "./components/item";
import Header from "./components/header";
import Filter from "./components/filter";

export default class App extends Component {
  state = {
    list: data,  
  };
  toggleClass = (item) => {
    let modifiedTasks = this.state.list.map((val) => {
      if (item.title === val.title) {
        val.completed = !val.completed;
      }
      return val;
    })
    this.setState({
      list: modifiedTasks
    });
  }
  updateSearch = (value) => {
    let filtered = data.filter((post) => {
      return !value || post.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    })
    this.setState({ list: filtered })
  }
  render() {
   
    const { updateSearch, toggleClass, state } = this;
    const { list } = state;

    return (
      <div className="App">
        <Header />
        <Filter onChange={updateSearch} />
        {list.map(item => (
          <Item onPress={toggleClass} key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
