/* display image from page for face detection  */

import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({input_error,onInputChange,onButtonSubmit}) => {

  return (

      <div>
            {/* {console.log(input)} */}
      <p className='f3'>
          {'This Brain will detect the face in the picture . Try it(; '}  
      </p>
      <div>
      <div className='form1 center pa4 br3 shadow-5'>
        {/* <div className='form center pa4 br3 shadow-5 '> */}
          <input className='f4 pa2 w-70 center' type='tex'
            onChange={onInputChange}
            />
            <button className='w-30 center grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
            >
            Detect</button>
        </div>
      </div>
      {  input_error!==''
      ? <div style={{marginTop: 20 ,fontSize:20, color:"red"}}> *Please enter image link </div>
      : ""

      }

      </div>
   
   
  );
}

export default ImageLinkForm;