import React, { Component } from 'react';
import { SimpleDialog } from 'react-viewerbase';

export default class SimpleDialogExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      inputValue: '',
      selectValue: '',
      dialogStyle: {
        top: '50px',
        left: '100px'
      }
    }

  }
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3>Simple Dialog</h3>
        </div>
        <div className='col-xs-12'>
          <p>Its similar to a modal but we can pass its style as props and manipulate it as we want.</p> 
          <p>Initially used to display tool data changes inot Viewport</p>
        </div>
        <div className='col-xs-6'>
          <button 
            onClick={this.openDialog}
            className='btn btn-primary'
          >
            {this.state.isDialogOpen ? 'Close Dialog' : 'Open Dialog'}
          </button>
        </div>
        <div className='col-xs-6'>
          <span>Input value: {this.state.inputValue}</span>
        </div>
        <div className='offset-xs-6 col-xs-6'>
          <span>Select value: {this.state.selectValue}</span>
        </div>
        <SimpleDialog
          isOpen={this.state.isDialogOpen}
          headerTitle='Example Dialog Header'
          onClose={this.closeDialog}
          onConfirm={this.onConfirm}
          componentStyle={this.state.dialogStyle}
        >
          <label htmlFor='input' className='simpleDialogLabelFor'>Input Example</label>
          <input 
            id='input' 
            type='text' 
            className='simpleDialogInput'
            autoComplete='off'
            ref={(input) => { this.input = input }}
          />
          <label htmlFor='select' className='simpleDialogLabelFor'>SelectExample</label>
          <select 
            name='select' 
            id='select'
            className='simpleDialogSelect'
            ref={(select) => { this.select = select }}
          >
            <option value='Option1'>Option1</option>
            <option value='Option2'>Option2</option>
            <option value='Option3'>Option3</option>
            <option value='Option4'>Option4</option>
          </select>

        </SimpleDialog>
      </div>
    )
  }

  openDialog = () => {
    this.setState({
      isDialogOpen: !this.state.isDialogOpen
    });
  }

  closeDialog = () => {
    this.setState({
      isDialogOpen: false
    });
  }

  onConfirm = () => {
    this.setState({
      isDialogOpen: false,
      inputValue: this.input.value,
      selectValue: this.select.value
    });
  }
}