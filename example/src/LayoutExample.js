import React, { Component } from 'react';
import { LayoutButton, LayoutManager } from 'react-viewerbase';
import './LayoutExample.css';

class LayoutExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentLayout: {
                row: 1,
                column: 1
            }
        };
    }
  changeLayout = (layout) => {
    this.setState({
      currentLayout: {
        row: layout.row,
        column: layout.col
      }
    });
  }

  render() {
    const layout = {
      rows: this.state.currentLayout.row + 1,
      columns: this.state.currentLayout.column + 1
    };

    const children = [];
    const numViewports = layout.rows * layout.columns;
    for (let i=0; i < numViewports; i++) {
      children.push((
        <div key={i}>
          <p>Viewport {i}</p>
        </div>
      ));
    }

    return (
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <h3>Layout Button</h3>
          <p>Used to choose which layout to place the viewer into.</p>
          <p>Layout changed to {JSON.stringify(layout, null, 2)}</p>
        </div>
        <div className="col-xs-2 col-lg-6 LayoutExample">
          <LayoutButton onChange={this.changeLayout} selectedCell={this.state.currentLayout} />
        </div>
        {<div className="col-xs-10 col-lg-4">
          <LayoutManager
            {...layout}
            children={children} />
        </div>
        }
      </div>
    );
  }
}

export default LayoutExample;
