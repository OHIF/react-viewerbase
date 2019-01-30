import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputRadio from './InputRadio.js';
import SelectTreeBreadcrumb from './SelectTreeBreadcrumb.js';

import cloneDeep from 'lodash.clonedeep';

import './SelectTree.styl';

class SelectTree extends Component {
  static defaultProps = {
    searchEnabled: true,
    autoFocus: true,
    selectTreeFirstTitle: 'First Level itens',
    items: []
  };

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: null,
      currentNode: null,
      value: null
    };
  }

  render() {
    const treeItems = this.getTreeItems();

    return (
      <div className="selectTree selectTreeRoot">
        <div className="treeContent">
          {this.headerItem()}
          <div className="treeOptions">
            {this.state.currentNode && (
              <SelectTreeBreadcrumb
                onSelected={this.onBreadcrumbSelected}
                label={this.state.currentNode.label}
                value={this.state.currentNode.value}
              />
            )}
            <div className="treeInputsWrapper">
              <div className="treeInputs">{treeItems}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate = () => {
    this.props.onComponentChange();
  };

  isLeafSelected = item => item && !Array.isArray(item.items);

  getLabelClass = item => {
    let labelClass = 'treeLeaf';
    if (this.state.searchTerm || Array.isArray(item.items)) {
      labelClass = 'treeNode';
    }
    return labelClass;
  };

  getTreeItems() {
    const storageKey = 'SelectTree';
    let treeItems;

    if (this.state.searchTerm) {
      const filteredItems = [];
      const rawItems = cloneDeep(this.props.items);
      rawItems.forEach(item => {
        if (Array.isArray(item.items)) {
          item.items.forEach(item => {
            const label = item.label.toLowerCase();
            const searchTerm = this.state.searchTerm.toLowerCase();
            if (label.indexOf(searchTerm) !== -1) {
              filteredItems.push(item);
            }
          });
        }
      });
      treeItems = filteredItems;
    } else if (this.state.currentNode) {
      treeItems = cloneDeep(this.state.currentNode.items);
    } else {
      treeItems = cloneDeep(this.props.items);
    }

    return treeItems.map((item, index) => {
      let itemKey = index;
      if (this.state.currentNode) {
        itemKey += `_${this.state.currentNode.value}`;
      }
      return (
        <InputRadio
          key={itemKey}
          id={`${storageKey}_${item.value}`}
          name={index}
          itemData={item}
          value={item.value}
          label={item.label}
          labelClass={this.getLabelClass(item)}
          onSelected={this.onSelected}
        />
      );
    });
  }

  headerItem = () => {
    let title = this.props.selectTreeFirstTitle;
    if (this.state.currentNode && this.props.selectTreeSecondTitle) {
      title = this.props.selectTreeSecondTitle;
    }

    return (
      <div className="wrapperLabel treeHeader">
        <div className="wrapperText">{title}</div>
        {this.props.searchEnabled && (
          <div className="wrapperSearch">
            <i className="fa fa-lg fa-search searchIcon" />
            <input
              type="text"
              className="searchInput"
              placeholder="Search labels"
              autoFocus={this.props.autoFocus}
              onChange={this.searchLocations}
              value={this.state.searchTerm ? this.state.searchTerm : ''}
            />
          </div>
        )}
      </div>
    );
  };

  searchLocations = evt => {
    this.setState({
      currentNode: null,
      searchTerm: evt.currentTarget.value
    });
  };

  onSelected = (event, item) => {
    if (this.isLeafSelected(item)) {
      this.setState({
        searchTerm: null,
        currentNode: null,
        value: null
      });
      return this.props.onSelected(event, item);
    } else {
      this.setState({
        currentNode: item
      });
    }
  };

  onBreadcrumbSelected = () => {
    this.setState({
      currentNode: null
    });
  };
}

SelectTree.propTypes = {
  searchEnabled: PropTypes.bool,
  selectTreeFirstTitle: PropTypes.string,
  selectTreeSecondTitle: PropTypes.string,
  onComponentChange: PropTypes.func,
  items: PropTypes.array.isRequired,
  autoFocus: PropTypes.bool,
  onSelected: PropTypes.func.isRequired
};

export default SelectTree;
