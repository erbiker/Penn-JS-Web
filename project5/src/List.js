import React, { Component } from 'react';
import ListItem from './ListItem.js';
import AddItem from './AddItem.js';
import { v4 as uuidv4 } from 'uuid';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    var name = this.props.name;
    var items = this.props.items;

    if (items) {
      return (
        <div id={name} key={uuidv4()}>
          <h3>{name} List</h3>
	<ul>
          {items.map(function(item) {
            return (
		    <li key={uuidv4()}><ListItem item={item} key={uuidv4()} /></li>
            )
          })}
	</ul>
          <AddItem idName={name} addItem={this.props.addItem.bind(this)} />
        </div>
      )
    }
    return (
      <div id={name} key={uuidv4()}>
        <h3>{name} List</h3>
        <AddItem idName={name} addItem={this.props.addItem.bind(this)} />
      </div>
    )

  }
}

export default List;
