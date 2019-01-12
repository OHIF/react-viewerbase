import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttled from '../utils/throttled.js';
import getScrollbarSize from '../utils/getScrollbarSize.js';

import './ScrollableArea.styl';

export default class ScrollableArea extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    class: PropTypes.string,
    scrollableClass: PropTypes.string,
    scrollX: PropTypes.bool,
    scrollY: PropTypes.bool,
    hideScrollbar: PropTypes.bool,
    scrollStep: PropTypes.number
  };

  static defaultProps = {
    hideScrollbar: true,
    class: 'flex-grow fit',
    scrollY: true,
    scrollX: false,
    scrollStep: 100
  };

  constructor(props) {
    super(props);

    this.state = {
      scrollAreaClasses: ''
    };

    this.scrollHandlerThrottled = throttled(150, this.scrollHandler);
  }

  render() {
    let scrollableClass = 'scrollable';
    if (this.props.scrollableClass) {
      scrollableClass += ` ${this.props.scrollableClass}`;
    }
    if (this.props.scrollX) {
      scrollableClass += ` scrollX`;
    }
    if (this.props.scrollY) {
      scrollableClass += ` scrollY`;
    }

    return (
      <div
        className={`scrollArea ${this.props.class} ${
          this.state.scrollAreaClasses
        }`}
      >
        <div
          className={scrollableClass}
          ref={element => {
            this.scrollableElement = element;
          }}
          onScroll={this.scrollHandlerThrottled}
          onMouseEnter={this.scrollHandlerThrottled}
          onTransitionEnd={this.scrollHandlerThrottled}
        >
          {this.props.children}
        </div>
        <div className="scrollNav scrollNavUp" onClick={this.scrollNavUp} />
        <div className="scrollNav scrollNavDown" onClick={this.scrollNavDown} />
      </div>
    );
  }

  componentDidMount() {
    this.adjustMargins();
    this.scrollHandler();
    window.addEventListener('resize', this.adjustMargins);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjustMargins);
  }

  scrollNavDown = event => {
    const {
      scrollTop: currentTop,
      offsetHeight: height,
      scrollHeight
    } = this.scrollableElement;

    const limit = scrollHeight - height;
    let scrollTop = currentTop + this.props.scrollStep;
    scrollTop = scrollTop > limit ? limit : scrollTop;
    this.scrollableElement.scrollTop = scrollTop;
  };

  scrollNavUp = event => {
    const { scrollTop: currentTop } = this.scrollableElement;

    let scrollTop = currentTop - this.props.scrollStep;
    scrollTop = scrollTop < 0 ? 0 : scrollTop;

    this.scrollableElement.scrollTop = scrollTop;
  };

  adjustMargins = () => {
    if (this.props.hideScrollbar) {
      const x = this.props.scrollX ? 1 : 0;
      const y = this.props.scrollY ? 1 : 0;
      const scrollbarSize = getScrollbarSize();
      this.scrollableElement.style.marginRight = `${0 -
        scrollbarSize[0] * y}px`;
      this.scrollableElement.style.marginBottom = `${0 -
        scrollbarSize[1] * x}px`;
    }
  };

  scrollHandler = () => {
    const {
      offsetHeight: height,
      scrollTop: scrollTop,
      scrollHeight
    } = this.scrollableElement;
    let scrollAreaClasses = '';

    // Stop here if unable to scroll
    if (scrollHeight <= height) return;

    // Check if can scroll up
    if (scrollTop) {
      scrollAreaClasses += 'canScrollUp';
    }

    // Check if can scroll down
    if (scrollTop + height < scrollHeight) {
      scrollAreaClasses += ' canScrollDown';
    }

    if (this.state.scrollAreaClasses !== scrollAreaClasses) {
      this.setState({
        scrollAreaClasses
      });
    }
  };
}
