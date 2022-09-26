import React, { Component } from 'react';
import List from './List.js';
import { v4 as uuidv4 } from 'uuid';

class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // If there are no lists, display a relevant message
    if(this.props.lists.length === 0) {
      return (
        <div id="listsDiv" className="List">
          <h2>Add new lists to get started!</h2>
        </div>
      );
    }

    // Otherwise, for each list, create a div
    var items = this.props.items;
    var lists = this.props.lists;
    var addItem = this.props.addItem;
    return (
      <div key={uuidv4()}>
      {lists.map(function(listName) {
        return (
          <List name={listName} items={items[listName]} addItem={addItem.bind(this)} key={uuidv4()} />
        )
      })}
      </div>
    );
  }
}

export default Lists;
