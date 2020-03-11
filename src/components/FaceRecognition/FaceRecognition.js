import React from 'react';
import './FaceRecognition.css';
// left = atuo mean the img fix to the widh of the image 
//  for getting normal size of image 
const FaceRecognition = ({imageUrl,box}) => {
  return (
    <div className='center ma'>
        <div className='absolute mt2'> 
            <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
            {/* div for drawing the square  */}
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>

        </div>
        
 
    </div>
  );
}

export default FaceRecognition;