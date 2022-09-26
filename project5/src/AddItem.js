import React, { Component } from 'react';

class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listName: this.props.idName,
      newItem: {},
      itemName: '',
    }
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
      this.props.addItem({listName: this.state.listName, newItem: {name: this.state.itemName}});
      this.setState({itemName: '', newItem: {name: this.state.itemName}});
  }
    

  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
      <h4>Add {this.props.idName}</h4>
      <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
      <div id={divName} ref={divName}>
        <label>Name</label><br />
        <input type='text' ref='id' value={this.state.itemName} 
          onChange={e => {this.setState({itemName: e.target.value})}}/>
        </div>
        <br />
        <input type='submit' value='Submit' />
        <br />
      </form>
      </div>
    );
  }

}

export default AddItem;
