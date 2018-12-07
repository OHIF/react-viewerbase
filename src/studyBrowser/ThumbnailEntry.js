import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageThumbnail from './ImageThumbnail';
import './ThumbnailEntry.styl';
import styleProperty from '../utils/styleProperty.js';

// Force to hardware acceleration to move element
// if browser supports translate property
const supportsTransform = styleProperty.check('transform', 'translate(1px, 1px)');

function getOffset(element) {
    const rect = element.getBoundingClientRect();

    return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
    };
}

class ThumbnailEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            diff: {
                x: 0,
                y: 0
            },
            startPosition: {},
            translateElement: {},
            dragging: false,
            elementTopLeft: {}
        };

        this.dragEndHandler = this.dragEndHandler.bind(this);
        this.dragStartHandler = this.dragStartHandler.bind(this);
        this.updateCoords = this.updateCoords.bind(this);
        this.updateTransformCoords = this.updateTransformCoords.bind(this);
    }

    static defaultProps = {
        imageSrc: '',
        active: false,
        supportsDragAndDrop: false,
        loading: false,
        error: false,
        stackPercentComplete: undefined,
    }

    static propTypes = {
        imageSrc: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        supportsDragAndDrop: PropTypes.bool.isRequired,
        active: PropTypes.bool.isRequired,
        stackPercentComplete: PropTypes.number,
        seriesDescription: PropTypes.string,
        seriesNumber: PropTypes.number,
        instanceNumber: PropTypes.number,
        numImageFrames: PropTypes.number,
        onDoubleClick: PropTypes.func,
        onClick: PropTypes.func,
        thumbnailDragStartHandler: PropTypes.func,
        thumbnailDragHandler: PropTypes.func,
        thumbnailDragEndHandler: PropTypes.func
    }

    render() {
        const hasInstanceNumber = this.props.instanceNumber !== undefined;

        let className = "ThumbnailEntry noselect"

        if (this.props.active) {
            className += ' active';
        }

        if (this.props.supportsDragAndDrop) {
            className += ' draggable';
        }

        const infoOnly = false;

        let draggableStyle;
        if (supportsTransform) {
            draggableStyle = {
                transform: `translate(${this.state.translateElement.x}px, ${this.state.translateElement.y}px)`,
                position: 'fixed',
                top: this.state.elementTopLeft.y,
                left: this.state.elementTopLeft.x,
            };
        } else {
            draggableStyle = {
                top: this.state.elementTopLeft.y,
                left: this.state.elementTopLeft.x,
                position: 'fixed',
                margin: '0 !important'
            };
        }
        

        return (<>
            <div className={className}
                onClick={this.onClick}
                onDoubleClick={this.onDoubleClick}
                onMouseDown={this.onMouseDown}
                onTouchStart={this.onTouchStart}
                onTouchMove={this.onTouchMove}
                onTouchEnd={this.onTouchEnd}
                >
                <div className="p-x-1">
                    <ImageThumbnail imageSrc={this.props.imageSrc} loading={this.props.loading} error={this.props.error} stackPercentComplete={this.props.stackPercentComplete}/>
                </div>
                <div className={infoOnly ? "series-details info-only" : "series-details"}>
                    <div className="series-description">
                        {this.props.seriesDescription}
                    </div>
                    <div className="series-information">
                        <div className="item item-series clearfix">
                            <div className="icon">S:</div>
                            <div className="value">{this.props.seriesNumber}</div>
                        </div>
                        {hasInstanceNumber && 
                            <div className="item item-series clearfix">
                                <div className="icon">I:</div>
                                <div className="value">{this.props.instanceNumber}</div>
                            </div>
                        }
                        <div className="item item-frames clearfix">
                            <div className="icon"><div></div></div>
                            <div className="value">{this.props.numImageFrames}</div>
                        </div>
                    </div>
                </div>
            </div>
            {this.state.dragging &&
            <div className="ThumbnailEntry noselect image-thumbnail-clone" style={draggableStyle}>
                <div className="p-x-1">
                    <ImageThumbnail imageSrc={this.props.imageSrc} loading={this.props.loading} error={this.props.error} stackPercentComplete={this.props.stackPercentComplete}/>
                </div>
                <div className={infoOnly ? "series-details info-only" : "series-details"}>
                    <div className="series-description">
                        {this.props.seriesDescription}
                    </div>
                    <div className="series-information">
                        <div className="item item-series clearfix">
                            <div className="icon">S:</div>
                            <div className="value">{this.props.seriesNumber}</div>
                        </div>
                        {hasInstanceNumber && 
                            <div className="item item-series clearfix">
                                <div className="icon">I:</div>
                                <div className="value">{this.props.instanceNumber}</div>
                            </div>
                        }
                        <div className="item item-frames clearfix">
                            <div className="icon"><div></div></div>
                            <div className="value">{this.props.numImageFrames}</div>
                        </div>
                    </div>
                </div>
            </div>
            }
            </>
        );
    }

    onClick = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    onDoubleClick = () => {
        if (this.props.onDoubleClick) {
            this.props.onDoubleClick();
        }
    }

    onMouseDown = (event) => {
        if (!this.props.supportsDragAndDrop) {
            return;
        }

        this.dragStartHandler(event);
    }

    updateTransformCoords(event) {
        // TODO: Fix for touch. Didn't test this at all
        /*cursorX = event.originalEvent.changedTouches[0].pageX;
        cursorY = event.originalEvent.changedTouches[0].pageY;*/
        const cursorX = event.pageX;
        const cursorY = event.pageY;

        this.setState({
            translateElement: {
                x: cursorX - this.state.startPosition.x,
                y: cursorY - this.state.startPosition.y
            }
        })
    }

    updateCoords(event) {
        // TODO: Fix for touch. Didn't test this at all
        /*cursorX = event.originalEvent.changedTouches[0].pageX;
        cursorY = event.originalEvent.changedTouches[0].pageY;*/
        const cursorX = event.pageX;
        const cursorY = event.pageY;

        this.setState({
            elementTopLeft: {
                x: cursorX - this.state.diff.x,
                y: cursorY - this.state.diff.y
            }
        })
    }

    dragStartHandler(event) {
        const targetThumbnail = event.currentTarget;

        // Set the cursor x and y positions from the current touch/mouse coordinates
        let cursorX;
        let cursorY;
        // Handle touchStart cases
        if (event.type === 'touchstart') {
            cursorX = event.originalEvent.touches[0].pageX;
            cursorY = event.originalEvent.touches[0].pageY;
        } else {
            cursorX = event.pageX;
            cursorY = event.pageY;
    
            // Hook up event handlers for mouse events
            if (supportsTransform) {
                document.addEventListener('mousemove', this.updateTransformCoords);
            } else {
                document.addEventListener('mousemove', this.updateCoords);
            }

            document.addEventListener('mouseup', this.dragEndHandler);
        }
    
        // This block gets the current offset of the touch/mouse
        // relative to the window
        //
        // i.e. Where did the user grab it from?
        const offset = getOffset(targetThumbnail);
        const { left, top } = offset;
    
        // This difference is saved for later so the element movement looks normal
        let diff = {
            x: cursorX - left,
            y: cursorY - top
        };
    
        // This sets the default style properties of the cloned element so it is
        // ready to be dragged around the page
        if (supportsTransform) {
            const rect = targetThumbnail.getBoundingClientRect();
            const viewerHeight = 0; //document.getElementById('viewer').height;
            const headerHeight = 0; //$('.header').outerHeight();
            const heightDiff = rect.top; //viewerHeight + headerHeight;
            
            // Save height difference for later to set top position of the element during movement
            this.setState({
                startPosition: {
                    x: cursorX,
                    y: cursorY
                },
                diff,
                dragging: true,
                elementTopLeft: {
                    x: left,
                    y: top
                }
            });
        } else {
            this.setState({
                startPosition: {
                    x: cursorX,
                    y: cursorY
                },
                diff,
                dragging: true,
                elementTopLeft: {
                    x: cursorX - diff.x,
                    y: cursorY - diff.y
                }
            });
        }
    }

    dragEndHandler() {
        this.setState({
            diff: {
                x: 0,
                y: 0
            },
            startPosition: {},
            translateElement: {},
            dragging: false,
            elementTopLeft: {}
        });

        if (supportsTransform) {
            document.removeEventListener('mousemove', this.updateTransformCoords);
        } else {
            document.removeEventListener('mousemove', this.updateCoords);
        }
        
        document.removeEventListener('mouseup', this.dragEndHandler);
    }

    onTouchStart = (event) => {
        if (!this.props.supportsDragAndDrop) {
            return;
        }

        this.dragStartHandler(event);
    }

    onTouchMove = (event) => {
        if (!this.props.supportsDragAndDrop) {
            return;
        }

        /*if (this.props.thumbnailDragHandler) {
            this.props.thumbnailDragHandler(event);
        }*/
    }

    onTouchEnd = (event) => {
        if (!this.props.supportsDragAndDrop) {
            return;
        }

        this.dragEndHandler();
    }
}

export default ThumbnailEntry;