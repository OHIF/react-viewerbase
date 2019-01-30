import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-viewerbase';

const rowStyle = { marginBottom: '40px'}
export default class OverlayTriggerExample extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3>OverlayTrigger, Overlay and Tooltip</h3>
        </div>
        <div className='col-xs-12'>
          <div className="row" style={rowStyle}>
            <div className="col-xs-12">
              <h4>Default trigger on hover</h4>
              { ['right', 'left', 'bottom', 'top'].map( (placement) => {
                return (
                  <div className='col-xs-3' key={`example-${placement}`}>
                    <OverlayTrigger
                      key={`example-${placement}`}
                      placement={placement}
                      overlay={
                        <Tooltip
                          placement={placement}
                          className='in'
                          id={`tooltip-${placement}`}
                        >
                          Here I am!
                        </Tooltip>
                      }
                    >
                      <button> Tooltip on {placement}</button>
                    </OverlayTrigger>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="row" style={rowStyle}>
            <div className="col-xs-12">
            <h4>Trigger to toggle visibility on click</h4>
              { ['right', 'left', 'bottom', 'top'].map( (placement) => {
                return (
                  <div className='col-xs-3' key={`example-${placement}`}>
                    <OverlayTrigger
                      key={`example-${placement}`}
                      placement={placement}
                      trigger='click'
                      overlay={
                        <Tooltip
                          placement={placement}
                          className='in'
                          id={`tooltip-${placement}`}
                        >
                          Here I am!
                        </Tooltip>
                      }
                    >
                       <button> Tooltip on {placement}</button>
                    </OverlayTrigger>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

}