import React from 'react';
import './FaceRecognition.css';
import  isImageUrl  from 'is-image-url'
// left = atuo mean the img fix to the widh of the image 
//  for getting normal size of image 
const FaceRecognition = ({box,imageUrl}) => {
  if(isImageUrl(imageUrl)){
  return (
    <div className='center ma'>
      {/* {console.log(box)} */}
      <div className='absolute mt2'> 
      <img  id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>  
      {/* <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/> */}
        {/* div for drawing the square  */}
        {
          box.map((item,index)=>(
          <div key={index.toString()} className='bounding-box' style={{top: item.topRow, right: item.rightCol, bottom: item.bottomRow, left: item.leftCol}}></div>  
          ))
        }
      </div>
    </div>
  );
      }
      else{
        return(<div></div>)
      }
}

export default FaceRecognition;