import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SimpleToolbarButton from './SimpleToolbarButton'
import PlayClipButton from './PlayClipButton'
import { LayoutButton } from './../components/layoutButton'

function getDefaultButtonData() {
  var buttonData = []

  buttonData.push({
    id: 'wwwc',
    title: 'WW/WC',
    className: 'imageViewerTool',
    iconClassName: 'fa fa-sun-o',
  })

  buttonData.push({
    id: 'wwwcRegion',
    title: 'Window by Region',
    className: 'imageViewerTool',
    iconClassName: 'fa fa-square',
  })

  buttonData.push({
    id: 'magnify',
    title: 'Magnify',
    className: 'imageViewerTool',
    iconClassName: 'fa fa-circle',
  })

  buttonData.push({
    id: 'annotate',
    title: 'Annotation',
    className: 'imageViewerTool',
    iconClassName: 'fa fa-arrows-h',
  })

  buttonData.push({
    id: 'invert',
    title: 'Invert',
    className: 'imageViewerCommand',
    iconClassName: 'fa fa-adjust',
  })

  buttonData.push({
    id: 'zoom',
    title: 'Zoom',
    className: 'imageViewerTool',
    iconClassName: 'fa fa-search',
  })

  buttonData.push({
    id: 'pan',
    title: 'Pan',
    className: 'imageViewerTool',
    iconClassName: 'fa fa-arrows',
  })

  buttonData.push({
    id: 'stackScroll',
    title: 'Stack Scroll',
    className: 'imageViewerTool',
    iconClassName: 'fa fa-bars',
  })

  buttonData.push({
    id: 'length',
    title: 'Length Measurement',
    className: 'imageViewerTool',
    iconClassName: 'fa fa-arrows-v',
  })

  buttonData.push({
    id: 'angle',
    title: 'Angle Measurement',
    className: 'imageViewerTool',
    iconClassName: 'fa fa-angle-left',
  })

  buttonData.push({
    id: 'dragProbe',
    title: 'Pixel Probe',
    className: 'imageViewerTool',
    iconClassName: 'fa fa-dot-circle-o',
  })

  buttonData.push({
    id: 'ellipticalRoi',
    title: 'Elliptical ROI',
    className: 'imageViewerTool',
    iconClassName: 'fa fa-circle-o',
  })

  buttonData.push({
    id: 'rectangleRoi',
    title: 'Rectangle ROI',
    className: 'imageViewerTool',
    iconClassName: 'fa fa-square-o',
  })

  buttonData.push({
    id: 'resetViewport',
    title: 'Reset Viewport',
    className: 'imageViewerCommand',
    iconClassName: 'fa fa-undo',
  })

  buttonData.push({
    id: 'clearTools',
    title: 'Clear tools',
    className: 'imageViewerCommand',
    iconClassName: 'fa fa-trash',
  })
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
