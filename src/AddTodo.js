import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: '' //Empty string by default
  }
  handleChange = (e) => { //function to handle change in the input field
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => { //function to handle submitting strings
    e.preventDefault();
    console.log(this.state); //debug works
    this.props.addTodo(this.state);
    e.target.reset(); //reset form field after pressing enter
  }
  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}> 
            <label className="red-text">Add something...</label>
            <input type="text" onChange={this.handleChange} />
          
          </form>
        </div>
        )
    }
}

export default AddTodo