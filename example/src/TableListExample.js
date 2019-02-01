import React, { Component } from 'react';
import { TableList, TableListItem } from 'react-viewerbase';

export default class TableListExample extends Component {
  constructor() {
    super();

    this.state = {
      selectedIndex: null,
      listItems: [
        { label: 'Brain Left' },
        { label: 'Brain Right' },
        { label: 'Heart Left' },
        { label: 'Heart Right' }
      ]
    }
  }

  render() {
    return (
    <>
      <div className="row">
        <div className='col-xs-12'>
          <h3>Table List Example</h3>
        </div>
        <div className="col-xs-12 col-sm-6">
          <pre style={{ maxHeight: '235px', overflowX: 'auto' }}>
            {JSON.stringify(this.state.listItems, null, 4)}
          </pre>
        </div>
        <div className="col-xs-12 col-sm-6">
          <TableList headerTitle='Example Table List Header'>
            {this.getTableListItems()}
          </TableList>
        </div>
      </div>
    </>
    )
  }

  getTableListItems = () => {
    return this.state.listItems.map( (item, index) => {
      return (
        <TableListItem
          key={`item_${index}`}
          itemClass={this.state.selectedIndex === index ? 'selected' : ''}
          itemIndex={index}
          onItemClick={this.onItemClick}
        >
          <label>{item.label}</label>
        </TableListItem>
      )
    })
  }

  onItemClick = (event, itemProps) => {
    this.setState({
      selectedIndex: itemProps.itemIndex
    });
  }
}