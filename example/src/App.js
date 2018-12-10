import dicomParser from 'dicom-parser';
import cornerstone from 'cornerstone-core';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import cornerstoneMath from 'cornerstone-math';
import cornerstoneTools from 'cornerstone-tools';
import Hammer from 'hammerjs';
import React, { Component } from 'react';
//import './initCornerstone';
import { LayoutManager, Toolbar, LayoutChooser, LayoutButton, ToolbarSection, StudyBrowser, ThumbnailEntry } from 'react-viewerbase';
import './App.css';



const exampleStudies = [
  {
    thumbnails: [
      {
        imageSrc: 'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/Anti-PD-1_Lung.jpg',
        seriesDescription: 'Anti-PD-1_Lung',
        active: true,
        seriesNumber: 2,
        numImageFrames: 512,
        stackPercentComplete: 30
      }, {
        imageSrc: 'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/Anti-PD-1_MELANOMA.jpg',
        seriesDescription: 'Anti-PD-1_MELANOMA',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256,
        stackPercentComplete: 70
      }
    ]
  }, {
    thumbnails: [
      {
        imageSrc: 'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-GBM.jpg',
        seriesDescription: 'CPTAC-GBM',
        active: true,
        seriesNumber: 2,
        numImageFrames: 512,
        stackPercentComplete: 100
      }, {
        imageSrc: 'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-CM.jpg',
        seriesDescription: 'CPTAC-CM',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256
      }, {
        imageSrc: 'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-HNSCC.jpg',
        seriesDescription: 'CPTAC-HNSCC',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256
      }, {
        imageSrc: 'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-LSCC.jpg',
        seriesDescription: 'CPTAC-LSCC',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256
      }
    ]
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.onThumbnailDoubleClick = this.onThumbnailDoubleClick.bind(this);
    this.onThumbnailClick = this.onThumbnailClick.bind(this);
    this.onThumbnailDrag = this.onThumbnailDrag.bind(this);
    this.resetDragEffects = this.resetDragEffects.bind(this);
    this.ChangeLayout = this.ChangeLayout.bind(this);
    //cornerstonejs constructions
    this.initCornerstone = this.initCornerstone.bind(this);
    this.dicomImage = null;
    this.loadImage = this.loadImage.bind(this);
    this.enableTool = this.enableTool.bind(this);
    this.disableAllTools = this.disableAllTools.bind(this);  
    this.dicomImageRef = this.dicomImageRef.bind(this);

    //cornerstoneTools.setToolActiveForElement(element, "WwwcTool", 1);
    //cornerstoneTools.setToolActiveForElement(element, "PanTool", 2);
    //cornerstoneTools.setToolActiveForElement(element, "ZoomTool", 4);

    this.exampleButtons = [
      {
        command: 'PanTool',
        type: 'tool',
        text: 'Pan',
        svgUrl: '/icons.svg#icon-tools-pan',        
        onClick: function () { console.log('I have a onclick function') },        
        mouseButtonMask: 2,
        setToolActive: this.enableTool
      },
      {
        command: 'ZoomTool',
        type: 'tool',
        text: 'Zoom',
        svgUrl: '/icons.svg#icon-tools-zoom',        
        mouseButtonMask: 4,
        setToolActive: this.enableTool
      },
      {
        command: 'Bidirectional',
        type: 'tool',
        text: 'Bidirectional',
        svgUrl: '/icons.svg#icon-tools-measure-target',        
        mouseButtonMask: 1,
        setToolActive: this.enableTool
      },
      {
        command: 'StackScroll',
        type: 'tool',
        text: 'Stack Scroll',
        svgUrl: '/icons.svg#icon-tools-stack-scroll',        
        mouseButtonMask: 1,
        setToolActive: this.enableTool
      },
      {
        command: 'reset',
        type: 'command',
        text: 'Reset',
        svgUrl: '/icons.svg#icon-tools-reset',
        mouseButtonMask: 1,
        setToolActive: this.enableTool
      },
      {
        command: 'WwwcTool',
        type: 'tool',
        text: 'Manual',
        svgUrl: '/icons.svg#icon-tools-levels',
        mouseButtonMask: 1,
        setToolActive: this.enableTool
      },
    ];

    this.state = {
      studyBrowserDropResults: '',
      buttons: this.exampleButtons,
      currentCell: {
        row: 2,
        col: 2
      }
    }        
  }    
  //CORNORSTONEJS EXAMPLE

  initCornerstone() {    
    cornerstoneTools.external.cornerstone = cornerstone;
    cornerstoneTools.external.Hammer = Hammer;
    cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
    cornerstoneTools.init();
    // Set the tool font and font size
    // context.font = "[style] [variant] [weight] [size]/[line height] [font family]";
    const fontFamily =
      'Work Sans, Roboto, OpenSans, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif';
    cornerstoneTools.textStyle.setFont(`16px ${fontFamily}`);
    // Set the tool width
    cornerstoneTools.toolStyle.setToolWidth(2);
    // Set color for inactive tools
    cornerstoneTools.toolColors.setToolColor('rgb(255, 255, 0)');
    // Set color for active tools
    cornerstoneTools.toolColors.setActiveColor('rgb(0, 255, 0)');
    cornerstoneTools.store.state.touchProximity = 40;
    const config = {
      maxWebWorkers: navigator.hardwareConcurrency || 1,
      startWebWorkersOnDemand: false,
      webWorkerPath: window.location + '/cornerstoneWADOImageLoaderWebWorker.min.js',
      webWorkerTaskPaths: [],
      taskConfiguration: {
        decodeTask: {
          loadCodecsOnStartup: true,
          initializeCodecsOnStartup: false,
          codecsPath: window.location + '/cornerstoneWADOImageLoaderCodecs.min.js',
          usePDFJS: false,
          strict: false
        }
      }
    };
    cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
    console.log(cornerstoneTools);
  }
  
  loadImage() {
    const element = this.dicomImage;
    // Listen for changes to the viewport so we can update the text overlays in the corner
    function onImageRendered(e) {
      const viewport = cornerstone.getViewport(e.target);
      document.getElementById(
        "mrbottomleft"
      ).textContent = `WW/WC: ${Math.round(
        viewport.voi.windowWidth
      )}/${Math.round(viewport.voi.windowCenter)}`;
      document.getElementById(
        "mrbottomright"
      ).textContent = `Zoom: ${viewport.scale.toFixed(2)}`;
    }
    element.addEventListener("cornerstoneimagerendered", onImageRendered);    
    const exampleStudy = {
      "stack": {
        "currentImageIdIndex": 0,
        "imageIds": [
          "dicomweb://localhost:3000/1.2.840.113619.2.5.1762583153.215519.978957063.80.dcm",
          "dicomweb://localhost:3000/1.2.840.113619.2.5.1762583153.215519.978957063.81.dcm"
        ]
      }
    };
    const imageId = exampleStudy["stack"]["imageIds"][0];

    cornerstone.enable(element);
    cornerstone.loadImage(imageId).then(image => {
      cornerstone.displayImage(element, image);           
      cornerstoneTools.addTool(cornerstoneTools.WwwcTool);
      cornerstoneTools.addTool(cornerstoneTools.PanTool);
      cornerstoneTools.addTool(cornerstoneTools.ZoomTool);            
    });
  };
  enableTool = ({command, mouseButtonMask}) => {    
  // this.disableAllTools();
    const element = this.dicomImage;
    debugger;
    cornerstoneTools.setToolActive(command, {mouseButtonMask: mouseButtonMask});
    this.setState({
      activeCommand: command
    })
  };
  // helper function used by the tool button handlers to disable the active tool
  // before making a new tool active
  disableAllTools() {    
    for (let i=0;i<this.state.buttons.length;i++) {
      cornerstoneTools.setToolDisabledForElement(this.dicomImage, this.state.buttons[i].command,{mouseButtonNumber: this.state.buttons[i].mouseButtonNumber});
    }
  };
  dicomImageRef(el) {
    this.dicomImage = el;
  };
  componentWillMount() {
    this.initCornerstone();
  }
  componentDidMount() {    
    //this.loadImage();
  }

  //////////////////END OF CORNORSTONE EXAMPLE
  resetDragEffects() {
    const targetClass = 'study-drop-area';
    const hoverClass = 'hovered';
  
    // Remove any current hovered effects on viewports
    const hovered = document.querySelector(`.${targetClass}.${hoverClass}`);
    if (hovered) {
      hovered.classList.remove(hoverClass);
    }    
    document.body.style.cursor = 'no-drop';
  }
  onThumbnailDrag(event) {
    const targetClass = 'study-drop-area';
    const hoverClass = 'hovered';
  
    const elemBelow = ThumbnailEntry.getDropElement(event);
  
    // If none exists, stop here
    if (!elemBelow) {
      this.resetDragEffects();
      return;
    }
  
    // Figure out what to do depending on what we're dragging over
    const elementIsInsideTarget = elemBelow.closest(`.${targetClass}`);
  
    // If what we are dragging over is not the target or one of it's children, stop here
    if (!elementIsInsideTarget) {
      this.resetDragEffects();
      return;
    }
    // If we are inside the target, add the hover class
    const target = elemBelow.closest(`.${targetClass}`);
    target.classList.add(hoverClass);
    // Update the cursor to something that indicates to the user that we can drop here
    document.body.style.cursor = 'copy';
  }
  onThumbnailClick() {
    console.warn('onThumbnailClick');
    console.warn(this);
  }
  onThumbnailDoubleClick() {
    console.warn('onThumbnailDoubleClick');
    console.warn(this);
  }
  onThumbnailDrop = (event, data) => {
    const targetClass = 'study-drop-area';
    const hoverClass = 'hovered';
    
    // Reset the cursor
    document.body.style.cursor = 'auto';

    const hovered = document.querySelector(`.${targetClass}.${hoverClass}`);
    if (hovered) {
      hovered.classList.remove(hoverClass);
    }

    const elemBelow = ThumbnailEntry.getDropElement(event);
  
    // If none exists, stop here
    if (!elemBelow) {
        return;
    }
  
    // Figure out what to do depending on what we're dragging over
    const elementIsInsideTarget = elemBelow.closest(`.${targetClass}`)
    if (elementIsInsideTarget) {
      this.setState({
        studyBrowserDropResults: JSON.stringify(data, null, 2)
      })
    }
  }
  ChangeLayout(currentCell) {    
      this.setState({
        currentCell
      });    
  }

  render () {
    return (
      <div className="container">
      <div className="row">
        <h2>React Imaging Application Components</h2>
      </div>
        <div className="row">
          <div className='col-xs-12'>
            <h4>What is this?</h4>
            <p>A set of re-usable components for build medical imaging applications. We use these to build the <a href="http://ohif.org" target="_blank" rel="noopener noreferrer">OHIF Viewer</a>.
            </p>
          </div>
          <hr></hr>
        </div>       

        <div className="row">
          <h2>Examples</h2>
      
          <div className="row">
            <div className='col-xs-12 col-lg-12'>
              <h3>Toolbar Section</h3>
              <p>A basic row of buttons for a toolbar.</p>
            </div>
            <div className='col-xs-12 col-lg-6'>
              <ToolbarSection buttons={this.state.buttons} activeCommand={this.state.activeCommand} />                
            </div>
            <div className='col-xs-12 col-lg-6'>
              
            </div>
          </div>      
          </div>           
          
        
          <div className="row" style={{height: "150px"}}>
            <div className='col-xs-12 col-lg-12'>
              <h3>Layout Button {this.state.currentCell && ` I changed layout to ${this.state.currentCell.row+1} to ${this.state.currentCell.col+1}`}</h3>
              <p>Used to choose which layout to place the viewer into.</p>
            </div>
          </div>
            <div className="row">
              <div className='col-xs-2 col-lg-2'>
                <LayoutButton onChange={this.ChangeLayout}/>
              </div>
              <div className='col-xs-10 col-lg-10'>
                <LayoutChooser rows={3} columns={3} onChange={this.ChangeLayout}/>
              </div>                            
              </div> 
              <br/>
              <br/>
              <br/>
          
          <div className="row">
            <div className='col-xs-12 col-lg-12'>
              <LayoutManager rows={this.state.currentCell.row} columns={this.state.currentCell.col}>
                <ThumbnailEntry                    
                    {...exampleStudies[0].thumbnails[0]}                    
                  />
              </LayoutManager>
            </div>            
          </div>




          <div className="row">
            <div className='col-xs-12 col-lg-6'>
              <h3>Study Browser</h3>
              <p>A simple scrollable list of image sets. Users can drag/drop data from here into a panel in the layout.</p>
              <div className='study-drop-area'>
                <h4>Drag / Drop something from the Study Browser here</h4>
                <span className='study-drop-results'>{this.state.studyBrowserDropResults}</span>
              </div>
            </div>
            <div className='col-xs-12 col-lg-6' style={{height: "512px"}}>
              <StudyBrowser
                studies={exampleStudies}
                onThumbnailClick={this.onThumbnailClick}
                onThumbnailDoubleClick={this.onThumbnailDoubleClick}
                onThumbnailDrag={this.onThumbnailDrag}
                onThumbnailDrop={this.onThumbnailDrop}
                />
            </div>
          </div>
          <div className="row">
            <div className='col-xs-12 col-lg-6'>
              <h3>Simple Toolbar</h3>
              <p>A basic row of buttons for a toolbar.</p>
            </div>
            <div className='col-xs-12 col-lg-6'>
              <Toolbar buttons={this.state.buttons}/>
            </div>
          </div>
          
         
        

        
      </div>
    )
  }
}
