import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import Webcam from 'react-webcam';
import { loadModels, getFullFaceDescription} from './api/face.js';
// import { loadModels, getFullFaceDescription, createMatcher } from './face.js'
import './VideoFaceDetection.css';

// Import face profile
// const JSON_PROFILE = require('../descriptors/bnk48.json');

const WIDTH = 420;
const HEIGHT = 420;
const inputSize = 160;

class VideoInput extends Component {
  constructor(props) {
    super(props);
    this.webcam = React.createRef();
    this.state = {
      user:{
        id: this.props.user.id,
        name:this.props.user.name,
        email:this.props.user.email,
        entries:this.props.user.entries,
        joined:this.props.user.joined
      },
      fullDesc: null,
      detections: null,
      descriptors: null,
      faceMatcher: null,
      match: null,
      facingMode: null
    };
  }
//componentDidMount
componentDidMount  = async () => {
    await loadModels();
    // this.setState({ faceMatcher: await createMatcher(JSON_PROFILE) });
    this.setInputDevice();
    
  };

  setInputDevice = () => {
    navigator.mediaDevices.enumerateDevices().then(async devices => {
      let inputDevice = await devices.filter(
        device => device.kind === 'videoinput'
      );
      if (inputDevice.length < 2) {
        await this.setState({
          facingMode: 'user'
        });
      } else {
        await this.setState({
          facingMode: { exact: 'environment' }
        });
      }
      this.startCapture();
    });
  };

  startCapture = () => {
    this.interval = setInterval(() => {
      this.capture();
    }, 1500);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  capture = async () => { 
    if (!!this.webcam.current) {
      await getFullFaceDescription(
        this.webcam.current.getScreenshot(),
        inputSize
      ).then(fullDesc => {
        if (!!fullDesc) {
          this.setState({
            detections: fullDesc.map(fd => fd.detection),
            descriptors: fullDesc.map(fd => fd.descriptor)
          });
        }
      });

      if (!!this.state.descriptors && !!this.state.faceMatcher) {
        let match = await this.state.descriptors.map(descriptor =>
          this.state.faceMatcher.findBestMatch(descriptor)
        );
        this.setState({ match });
      }
    }
  };

  render() {
    const { detections, match, facingMode } = this.state;
    let videoConstraints = null;
    // let camera = '';
    if (!!facingMode) {
      videoConstraints = {
        width: WIDTH,
        height: HEIGHT,
        facingMode: facingMode
      };
      // if (facingMode === 'user') {
      //   camera = 'Front';
      // } else {
      //   camera = 'Back';
      // }
    }

    let drawBox = null;
    if (!!detections) {
      drawBox = detections.map((detection, i) => {
        // console.log(detection)
        let _H = detection.box.height;
        let _W = detection.box.width;
        let _X = detection.box._x;
        let _Y = detection.box._y;
        return (
          <div key={i}>
            <div
              style={{
                position: 'absolute',
                border: 'solid',
                borderColor: 'blue',
                height: _H,
                width: _W,
                transform: `translate(${_X}px,${_Y}px)`
              }}
            >
              {!!match && !!match[i] ? (
                <p
                  style={{
                    backgroundColor: 'blue',
                    border: 'solid',
                    borderColor: 'blue',
                    width: _W,
                    marginTop: 0,
                    color: '#fff',
                    transform: `translate(-3px,${_H}px)`
                  }}
                >
                  {match[i]._label}
                </p>
              ) : null}
            </div>
          </div>
        );
      });
    }

    return (
      <div className='VideoPlayer'>
        <p className='white f3'>
            {`Hello Dear ${this.state.user.name}!`}
            
            {/* {'*please wait couple second for the camera to focuses on '} */}
        </p>
        <p className='white f3'>
          {`enable your camera and it will detect your face in live!`}
        </p>
        <p className='white f5'>
            {'*please wait a couple seconds for the camera to focuses on your face '} 
        </p>

        <div className='center'>
        <div className=' f3 form center pa4 br5 shadow-1 ' >
        {/* <video controls autostart="true" autoPlay src={Video} type="video/mp4"  width='500px' heigh='700px' /> */}
        <div
          className="VideoPlayer"
        >
          {/* <p>Camera: {camera}</p> */}
          <div
            style={{
              width: WIDTH,
              height: HEIGHT
            }}
          >
            <div style={{ position: 'relative', width: WIDTH }}>
              {!!videoConstraints ? (
                <div style={{ position: 'absolute' }}>
                  <Webcam
                    audio={false}
                    width={WIDTH}
                    height={HEIGHT}
                    ref={this.webcam}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                  
                  />
                </div>
              ) : null}
              {!!drawBox ? drawBox : null}
            </div>
          </div>
        </div>
        </div>
        </div>



      </div>
     
    );
  }
}

export default VideoInput;
