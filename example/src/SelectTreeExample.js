import React, { Component } from 'react';
import { SelectTree } from 'react-viewerbase';

const mockItems = [
  {
    label: 'A',
    value: 'A',
    items: [
      {
        label: 'Abdominal Wall',
        value: 'AbdominalWall'
      },
      {
        label: 'Adrenal Left',
        value: 'AdrenalLeft'
      }
    ]
  },
  {
    label: 'B',
    value: 'B',
    items: [
      {
        label: 'Brain',
        value: 'Brain'
      },
      {
        label: 'Breast',
        value: 'Breast'
      }
    ]
  }
]
export default class SelectTreeExample extends Component {
  constructor() {
    super();

    this.state = {
      items: mockItems,
      itemLabelSelected: ''
    }
  }

  render() {
    return (
    <>
    <div className='row'>
      <div className='col-xs-12 col-sm-6'>
        <h3>Select Tree</h3>
        <p>Items data as JSON</p>
        <pre style={{ maxHeight: '135px', overflowX: 'auto' }}>
          {JSON.stringify(this.state.items, null, 4)}
        </pre>
      </div>
      <div className='col-xs-12 col-sm-6'>
        <p style={{ marginTop: '20px' }}>Last selected item: {this.state.itemLabelSelected}</p>
        <SelectTree
          items={this.state.items}
          onSelected={this.onSelectTreeSelectItemCallback}
          selectTreeFirstTitle="Select Tree Example Header"
          onComponentChange={this.repositionComponent}
        />
      </div>
    </div>
    </>
    );
  }

  onSelectTreeSelectItemCallback = (event, itemSelected) => {
    this.setState({
      itemLabelSelected: itemSelected.label
    });
  }

  repositionComponent = () => {

  }
}