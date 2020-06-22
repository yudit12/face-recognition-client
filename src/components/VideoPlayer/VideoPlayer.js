import React  from 'react';
// import ReactPlayer from "react-player";
import Video from "./test2.mp4";
import './VideoPlayer.css';
class VideoPlayer extends React.Component  {
    // constructor(props){
    //     super(props);
    
        
    //   }
      render(){
          return(
        <div className='VideoPlayer'>
             <p className='f3'>
                {'This video will track your face try it . Try it(; '}  
            </p>

        <div className='center'>
        <div className=' f3 form center pa4 br5 shadow-5'>
        <video controls autostart="true" autoPlay src={Video} type="video/mp4"  width='500px' heigh='700px' />
        </div>
        </div>



        </div>
        
          );
      }
    
   
}

export default VideoPlayer;