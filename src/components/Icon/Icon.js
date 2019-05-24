import React from 'react'
import PropTypes from 'prop-types'

// Icons
import MeasurementAdditional from './icons/IconMeasurementAdditional.js'
import MeasurementLesions from './icons/IconMeasurementLesions.js'
import Settings from './icons/IconSettings.js'
import StatusComplete from './icons/IconStatusComplete.js'
import StatusLock from './icons/IconStatusLock.js'
import Studies from './icons/IconStudies.js'
import ToolElliptical from './icons/IconToolElliptical.js'
import ToolInvert from './icons/IconToolInvert.js'
import ToolLevel from './icons/IconToolLevel.js'
import ToolLink from './icons/IconToolLink.js'
import ToolMagnify from './icons/IconToolMagnify.js'
import ToolMeasureNonTarget from './icons/IconToolMeasureNonTarget.js'
import ToolMeasureTarget from './icons/IconToolMeasureTarget.js'
import ToolMeasureTargetCr from './icons/IconToolMeasureTargetCr.js'
import ToolMeasureTargetUn from './icons/IconToolMeasureTargetUn.js'
import ToolMeasureTemp from './icons/IconToolMeasureTemp.js'
import ToolMore from './icons/IconToolMore.js'
import ToolPan from './icons/IconToolPan.js'
import ToolReset from './icons/IconToolReset.js'
import ToolStackScroll from './icons/IconToolStackScroll.js'
import ToolZoom from './icons/IconToolZoom.js'

const IconTypes = {
  'measurement-additional': MeasurementAdditional,
  'measurement-lesions': MeasurementLesions,
  settings: Settings,
  'status-complete': StatusComplete,
  'status-lock': StatusLock,
  studies: Studies,
  'tool-elliptical': ToolElliptical,
  'tool-invert': ToolInvert,
  'tool-level': ToolLevel,
  'tool-link': ToolLink,
  'tool-magnify': ToolMagnify,
  'tool-measure-non-target': ToolMeasureNonTarget,
  'tool-measure-target': ToolMeasureTarget,
  'tool-measure-target-cr': ToolMeasureTargetCr,
  'tool-measure-target-un': ToolMeasureTargetUn,
  'tool-measure-temp': ToolMeasureTemp,
  'tool-more': ToolMore,
  'tool-pan': ToolPan,
  'tool-reset': ToolReset,
  'tool-stack-scroll': ToolStackScroll,
  'tool-zoom': ToolZoom,
}

const Icon = props => {
  const MyIconComponent = IconTypes[props.name]

  return MyIconComponent ? <MyIconComponent {...props} /> : <div />
}

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
}

Icon.defaultProps = {}

export { Icon, IconTypes }
