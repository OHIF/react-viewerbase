import React from 'react'
import PropTypes from 'prop-types'

// Icons
import Add from './icons/IconAdd.js'
import AccordianExpand from './icons/IconAccordianExpand.js'
import AngleDoubleDown from './icons/IconAngleDoubleDown.js'
import AngleDoubleUp from './icons/IconAngleDoubleUp.js'
import ArrowsAltH from './icons/IconArrowsAltH.js'
import ArrowsAltV from './icons/IconArrowsAltV.js'
import Bars from './icons/IconBars.js'
import CheckCircle from './icons/IconCheckCircle.js'
import CheckSolid from './icons/IconCheckSolid.js'
import Circle from './icons/IconCircle.js'
import CircleOutline from './icons/IconCircleOutline.js'
import Close from './icons/IconClose.js'
import CreateComment from './icons/IconCreateComment.js'
import CreateScreenCapture from './icons/IconCreateScreenCapture.js'
import Edit from './icons/IconEdit.js'
import FastBackward from './icons/IconFastBackward.js'
import FastForward from './icons/IconFastForward.js'
import HudGroup from './icons/IconHudGroup.js'
import Log from './icons/IconLog.js'
import Logout from './icons/IconLogout.js'
import MeasurementAdditional from './icons/IconMeasurementAdditional.js'
import MeasurementLesions from './icons/IconMeasurementLesions.js'
import OhifLogo from './icons/IconOhifLogo.js'
import Password from './icons/IconPassword.js'
import Play from './icons/IconPlay.js'
import Server from './icons/IconServer.js'
import Settings from './icons/IconSettings.js'
import Spinner from './icons/IconSpinner.js'
import SquareOutline from './icons/IconSquareOutline.js'
import StatusComplete from './icons/IconStatusComplete.js'
import StatusLock from './icons/IconStatusLock.js'
import StepBackward from './icons/IconStepBackward.js'
import StepForward from './icons/IconStepForward.js'
import Stop from './icons/IconStop.js'
import Studies from './icons/IconStudies.js'
import StudyList from './icons/IconStudyList.js'
import Sun from './icons/IconSun.js'
import Theme from './icons/IconTheme.js'
import ToolCineplayToggle from './icons/IconToolCineplayToggle.js'
import ToolElliptical from './icons/IconToolElliptical.js'
import ToolFlipHorizontal from './icons/IconToolFlipHorizontal.js'
import ToolFlipVertical from './icons/IconToolFlipVertical.js'
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
import ToolRotate from './icons/IconToolRotate.js'
import ToolRotateRight from './icons/IconToolRotateRight.js'
import ToolStackScroll from './icons/IconToolStackScroll.js'
import ToolZoom from './icons/IconToolZoom.js'
import Trash from './icons/IconTrash.js'
import TrialInfo from './icons/IconTrialInfo.js'
import ViewportLink from './icons/IconViewportLink.js'
import Warning from './icons/IconWarning.js'
import WindowLevelBrain from './icons/IconWindowLevelBrain.js'
import WindowLevelSoftTissue from './icons/IconWindowLevelSoftTissue.js'
import WindowLevelLung from './icons/IconWindowLevelLung.js'
import WindowLevelLiver from './icons/IconWindowLevelLiver.js'

import './Icon.styl'

const IconTypes = {
  'accordian-expand': AccordianExpand,
  add: Add,
  'angle-double-down': AngleDoubleDown,
  'angle-double-up': AngleDoubleUp,
  'arrows-alt-h': ArrowsAltH,
  'arrows-alt-v': ArrowsAltV,
  bars: Bars,
  'check-circle': CheckCircle,
  'check-solid': CheckSolid,
  circle: Circle,
  'circle-outline': CircleOutline,
  close: Close,
  'create-comment': CreateComment,
  'create-screen-capture': CreateScreenCapture,
  edit: Edit,
  'fast-backward': FastBackward,
  'fast-forward': FastForward,
  'hud-group': HudGroup,
  log: Log,
  logout: Logout,
  'measurement-additional': MeasurementAdditional,
  'measurement-lesions': MeasurementLesions,
  'ohif-logo': OhifLogo,
  password: Password,
  play: Play,
  server: Server,
  settings: Settings,
  spinner: Spinner,
  'square-outline': SquareOutline,
  'status-complete': StatusComplete,
  'status-lock': StatusLock,
  'step-backward': StepBackward,
  'step-forward': StepForward,
  stop: Stop,
  studies: Studies,
  'study-list': StudyList,
  sun: Sun,
  theme: Theme,
  'tool-cineplay-toggle': ToolCineplayToggle,
  'tool-elliptical': ToolElliptical,
  'tool-flip-horizontal': ToolFlipHorizontal,
  'tool-flip-vertical': ToolFlipVertical,
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
  'tool-rotate': ToolRotate,
  'tool-rotate-right': ToolRotateRight,
  'tool-stack-scroll': ToolStackScroll,
  'tool-zoom': ToolZoom,
  trash: Trash,
  'trial-info': TrialInfo,
  'viewport-link': ViewportLink,
  warning: Warning,
  'wl-brain': WindowLevelBrain,
  'wl-soft-tissue': WindowLevelSoftTissue,
  'wl-lung': WindowLevelLung,
  'wl-liver': WindowLevelLiver,
}

const Icon = props => {
  const MyIconComponent = IconTypes[props.name]

  return MyIconComponent ? <MyIconComponent {...props} /> : <div />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  animation: PropTypes.string,
}

Icon.defaultProps = {
  width: '100%',
  height: '100%',
}

export { Icon, IconTypes }
