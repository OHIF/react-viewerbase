import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SimpleToolbarButton from './SimpleToolbarButton'
import PlayClipButton from './PlayClipButton'
import { LayoutButton } from './../components/layoutButton'

function getDefaultButtonData() {
  var buttonData = [
    {
      id: 'wwwc',
      title: 'WW/WC',
      className: 'imageViewerTool',
      iconName: 'sun',
    },
    {
      id: 'wwwcRegion',
      title: 'Window by Region',
      className: 'imageViewerTool',
      iconName: 'stop',
    },
    {
      id: 'magnify',
      title: 'Magnify',
      className: 'imageViewerTool',
      iconName: 'circle',
    },
    {
      id: 'annotate',
      title: 'Annotation',
      className: 'imageViewerTool',
      iconName: 'arrows-alt-h',
    },
    {
      id: 'invert',
      title: 'Invert',
      className: 'imageViewerCommand',
      iconName: 'tool-invert',
    },
    {
      id: 'zoom',
      title: 'Zoom',
      className: 'imageViewerTool',
      iconName: 'log',
    },
    {
      id: 'pan',
      title: 'Pan',
      className: 'imageViewerTool',
      iconName: 'tool-pan',
    },
    {
      id: 'stackScroll',
      title: 'Stack Scroll',
      className: 'imageViewerTool',
      iconName: 'bars',
    },
    {
      id: 'length',
      title: 'Length Measurement',
      className: 'imageViewerTool',
      iconName: 'arrows-alt-v',
    },
    {
      id: 'angle',
      title: 'Angle Measurement',
      className: 'imageViewerTool',
      iconName: 'fa fa-angle-left',
    },
    {
      id: 'dragProbe',
      title: 'Pixel Probe',
      className: 'imageViewerTool',
      iconName: 'fa fa-dot-circle-o',
    },
    {
      id: 'ellipticalRoi',
      title: 'Elliptical ROI',
      className: 'imageViewerTool',
      iconName: 'circle-outline',
    },
    {
      id: 'rectangleRoi',
      title: 'Rectangle ROI',
      className: 'imageViewerTool',
      iconName: 'square-outline',
    },
    {
      id: 'resetViewport',
      title: 'Reset Viewport',
      className: 'imageViewerCommand',
      iconName: 'tool-reset',
    },
    {
      id: 'clearTools',
      title: 'Clear tools',
      className: 'imageViewerCommand',
      iconName: 'trash',
    },
  ]
  return buttonData
}

export default class Toolbar extends Component {
  static propTypes = {
    buttons: PropTypes.array.isRequired,
    includeLayoutButton: PropTypes.bool.isRequired,
    includePlayClipButton: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    buttons: getDefaultButtonData(),
    includeLayoutButton: true,
    includePlayClipButton: true,
  }

  render() {
    var maybePlayClipButton
    if (this.props.includePlayClipButton) {
      maybePlayClipButton = <PlayClipButton />
    }

    var maybeLayoutButton
    if (this.props.includeLayoutButton) {
      maybeLayoutButton = <LayoutButton />
    }

    return (
      <div id="toolbar">
        <div className="btn-group">
          {this.props.buttons.map((button, i) => {
            return <SimpleToolbarButton {...button} key={i} />
          })}
          {maybePlayClipButton}
          {maybeLayoutButton}
        </div>
      </div>
    )
  }
}
