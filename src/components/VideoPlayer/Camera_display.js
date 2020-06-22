// //https://stackoverflow.com/questions/41111706/how-to-stream-webcam-feed-on-web-page-using-react-js-component
// //https://github.com/WebDevSimplified/Face-Detection-JavaScript/blob/master/script.js
// //https://www.youtube.com/watch?v=CVClHLwv-4I
// import React, { useEffect }  from 'react';
// import Webcam from "react-webcam";
// import * as faceapi from 'face-api.js'

// // class WebcamComponent extends React.Component {

// //     // constructor(props)
// //     // {
// //     //     super(props);
// //     // }

// //      startVideo=() =>{
// //         const video = document.getElementById('video') 
// //         navigator.getUserMedia(
// //           { video: {} },
// //           stream => video.srcObject = stream,
// //           err => console.error(err)
// //         )
// //       }
      

// //     render()
// //     {

// //         return(
// //             <div>
// //                 <h1> welcome to video face tracker</h1>
// //                 <video startVideo={this.startVideo}  autoPlay="true" />


// //             </div>
// //         )
// //     }


// // }


// // export default WebcamComponent;
// const WebcamComponent = () => {

//   useEffect(() => {

//     const video = document.getElementById('video-player')
  
//     Promise.all([
//       // faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
//       // faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
//       // faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
//       // faceapi.nets.faceExpressionNet.loadFromUri("/models")
//     ]).then(startVideo)
    
//     function startVideo() {
//       navigator.getUserMedia(
//         { video: {} },
//         stream => video.srcObject = stream,
//         err => console.error(err)
//       )
//     }
    
//     video.addEventListener('play', () => {
//       const canvas = faceapi.createCanvasFromMedia(video)
//       document.body.append(canvas)
//       const displaySize = { width: video.width, height: video.height }
//       faceapi.matchDimensions(canvas, displaySize)
//       setInterval(async () => {
//         const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
//         const resizedDetections = faceapi.resizeResults(detections, displaySize)
//         canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
//         faceapi.draw.drawDetections(canvas, resizedDetections)
//         faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
//         faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
//       }, 100)
//     })  
//   }, [])


//   return (
//     <div> 
//         <h1> welcome to video face tracker</h1>
//         <h3>Please mark your face area</h3>
//         <video id='video-player'></video>
//         {/* <Webcam /> */}
//     </div>
//   )
// }



// export default WebcamComponent;

















// // class Camera_display extends React.Component  {
// //     // constructor(props){
// //     //     super(props);
    
        
// //     //   }
    
// //       render(){
// //           return(
// //         <div>
// //             <h1> Camera display</h1>
// //         </div>



// //           )}
    
   
// // }


// // export default Camera_display;