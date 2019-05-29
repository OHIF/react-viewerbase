import React from 'react'
import adjust from './icons/adjust.svg'
// Icons
import angleDoubleDown from './icons/angle-double-down.svg'
import angleDoubleUp from './icons/angle-double-up.svg'
import arrowsAltH from './icons/arrows-alt-h.svg'
import arrowsAltV from './icons/arrows-alt-v.svg'
import bars from './icons/bars.svg'
import brain from './icons/brain.svg'
import caretDown from './icons/caret-down.svg'
import caretUp from './icons/caret-up.svg'
import check from './icons/check.svg'
import checkCircle from './icons/check-circle.svg'
import checkCircleO from './icons/check-circle-o.svg'
import chevronDown from './icons/chevron-down.svg'
import circle from './icons/circle.svg'
import circleNotch from './icons/circle-notch.svg'
import circleO from './icons/circle-o.svg'
import cog from './icons/cog.svg'
import createComment from './icons/create-comment.svg'
import createScreenCapture from './icons/create-screen-capture.svg'
import database from './icons/database.svg'
import edit from './icons/edit.svg'
import ellipseH from './icons/ellipse-h.svg'
import ellipseV from './icons/ellipse-v.svg'
import fastBackward from './icons/fast-backward.svg'
import fastForward from './icons/fast-forward.svg'
import inlineEdit from './icons/inline-edit.svg'
import level from './icons/level.svg'
import link from './icons/link.svg'
import list from './icons/list.svg'
import liver from './icons/liver.svg'
import lock from './icons/lock.svg'
import lockAlt from './icons/lock-alt.svg'
import lung from './icons/lung.svg'
import measureNonTarget from './icons/measure-non-target.svg'
import measureTarget from './icons/measure-target.svg'
import measureTargetCr from './icons/measure-target-cr.svg'
import measureTargetUn from './icons/measure-target-un.svg'
import measureTemp from './icons/measure-temp.svg'
import more from './icons/more.svg'
import objectGroup from './icons/object-group.svg'
import ohifLogo from './icons/ohif-logo.svg'
import oval from './icons/oval.svg'
import pan from './icons/pan.svg'
import play from './icons/play.svg'
import plus from './icons/plus.svg'
import powerOff from './icons/power-off.svg'
import reset from './icons/reset.svg'
import rotate from './icons/rotate.svg'
import rotateRight from './icons/rotate-right.svg'
import search from './icons/search.svg'
import searchPlus from './icons/search-plus.svg'
import softTissue from './icons/soft-tissue.svg'
import squareO from './icons/square-o.svg'
import stackScroll from './icons/stack-scroll.svg'
import stepBackward from './icons/step-backward.svg'
import stepForward from './icons/step-forward.svg'
import stop from './icons/stop.svg'
import studies from './icons/studies.svg'
import studyList from './icons/study-list.svg'
import sun from './icons/sun.svg'
import theme from './icons/theme.svg'
import times from './icons/times.svg'
import trash from './icons/trash.svg'
import trialInfo from './icons/trial-info.svg'
import viewportLink from './icons/viewport-link.svg'
import warning from './icons/warning.svg'
import youtube from './icons/youtube.svg'
import zoom from './icons/zoom.svg'

const ICONS = {
  plus,
  'chevron-down': chevronDown,
  'angle-double-down': angleDoubleDown,
  'angle-double-up': angleDoubleUp,
  'arrows-alt-h': arrowsAltH,
  'arrows-alt-v': arrowsAltV,
  bars,
  'caret-down': caretDown,
  'caret-up': caretUp,
  'check-circle-o': checkCircleO,
  check,
  circle,
  'circle-o': circleO,
  times,
  'create-comment': createComment,
  'create-screen-capture': createScreenCapture,
  edit,
  'fast-backward': fastBackward,
  'fast-forward': fastForward,
  'object-group': objectGroup,
  search,
  'power-off': powerOff,
  'inline-edit': inlineEdit,
  list,
  'ohif-logo': ohifLogo,
  lock,
  play,
  database,
  cog,
  'circle-notch': circleNotch,
  'square-o': squareO,
  'check-circle': checkCircle,
  'lock-alt': lockAlt,
  'step-backward': stepBackward,
  'step-forward': stepForward,
  stop,
  studies,
  'study-list': studyList,
  sun,
  theme,
  youtube,
  oval,
  'ellipse-h': ellipseH,
  'ellipse-v': ellipseV,
  adjust,
  level,
  link,
  'search-plus': searchPlus,
  'measure-non-target': measureNonTarget,
  'measure-target': measureTarget,
  'measure-target-cr': measureTargetCr,
  'measure-target-un': measureTargetUn,
  'measure-temp': measureTemp,
  more,
  pan,
  reset,
  rotate,
  'rotate-right': rotateRight,
  'stack-scroll': stackScroll,
  zoom,
  trash,
  'trial-info': trialInfo,
  'viewport-link': viewportLink,
  warning,
  brain,
  'soft-tissue': softTissue,
  lung,
  liver,
}

/**
 * Return the matching SVG Icon as a React Component.
 * Results in an inlined SVG Element. If there's no match,
 * return `null`
 */
export default function getIcon(key) {
  if (!key) {
    return null
  }

  return React.createElement(ICONS[key])
}

export { ICONS }
