import React  from 'react';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './FaceRecognition/FaceRecognition.js'
import Rank from './Rank/Rank.js'
import  isImageUrl from 'is-image-url'
import Clarifai  from 'clarifai';
// initialize with your api key.
const app = new Clarifai.App({
  apiKey: '344f82caa0f94d048bd5051627471713'
 });

// const initState={
//   input :'',
//   imageUrl:'',
//   faces_array:[],
//   input_error:'',
//   // user1:{
//   //   id: this.props.user.id,
//   //   name:this.props.user.name,
//   //   email:this.props.user.email,
//   //   entries:this.props.user.entries,
//   //   joined:this.props.user.joined
//   // }

// }
class ImageFaceDetection extends React.Component {
  constructor(props){

    super(props);
    this.state={
      input :'',
      imageUrl:'',
      faces_array:[],
      input_error:'',
      user:{
        id: this.props.user.id,
        name:this.props.user.name,
        email:this.props.user.email,
        entries:this.props.user.entries,
        joined:this.props.user.joined
      }
    
    }
   
    
    //
  }


 

  /*triggered every time user enter input*/
  onInputChange = (event) => {
    this.setState({input: event.target.value});
    
    // console.log( event.target.value)/* print the entred input */
    // console.log(this.state.input)
  }



   /* 
    calculate face location based on the input we get from clarifai API (return values in percentage)
    func return object -  the 4 point of the square of the face region
    
    */
  calculateFaceLocation = (data) => {
    //  console.log(data.outputs[0].data.regions[0].region_info.bounding_box)// display regions of the first face
    // data.outputs[0].data.regions.map(item=>{return console.log(item.region_info.bounding_box) })// display regions of all faces that was found
    
    // for detection of many faces 
    const clarifaiFaces_array = [...data.outputs[0].data.regions.map(item=>{return item.region_info.bounding_box })]
    // clarifaiFaces_array.map(item=>{return console.log(item) }) 
    const image = document.getElementById('inputimage');// get image from FaceRecognition.js
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(image);
    // console.log(width,height)
  
    
    
    let clarifaiFaces_array1 = [...clarifaiFaces_array.map(item=>{
      return {
          leftCol: item.left_col * width,
          topRow: item.top_row * height,
          rightCol: width - (item.right_col * width),
          bottomRow: height - (item.bottom_row * height)
        
      }
   })]
 
   return clarifaiFaces_array1;

    

  }


   /* display all Faces  regions */ 
  displayAllFaces = (clarifaiFaces_array) => {
    // clarifaiFaces_array.map(item=>{return console.log(item) })
    this.setState(
            
     { faces_array: [...clarifaiFaces_array]}
   );

  }



  /*

    func for getting response when submitting the image link form

  */
  onButtonSubmit = () => {
    // console.log('click'); 
    this.setState({imageUrl: this.state.input});
    /*predict get : Clarifai model we whant to use  and  the url of the image (input) */
    console.log(this.state.input)
    console.log(isImageUrl(this.state.input))
    if (isImageUrl(this.state.input))
    {
      this.setState({input_error:''})
      app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
        .then( response=>{
          if (response){
            // send to server 
            fetch('/image',{
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
              id :this.state.user.id,

              })
            })
              .then(response=>response.json())
              .then(count=>{
                this.setState(Object.assign(this.state.user,{entries:count}))
              })
              .catch(console.log)// print error    
          }
          // console.log(response.outputs[0].data.regions) 
          this.displayAllFaces(this.calculateFaceLocation(response))
        })
        .catch(err=>console.log(err)) ;
         

    }
    else{
      console.log("empty link or incorrect image link ")
      this.setState({input_error:" false"})
    }
   
  }

 

  render(){
    const {input_error,faces_array,imageUrl} = this.state;
    // {console.log(this.state.faces_array)}
    return(
        <div>
         {console.log(this.state.user)}
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm input_error={input_error}  onInputChange={ this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition box={faces_array} imageUrl={imageUrl}/>
        </div>

    );
    
  }

}

export default ImageFaceDetection;