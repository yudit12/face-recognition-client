import React from 'react';
import Particles from 'react-particles-js';// for interactive background
// import Clarifai  from 'clarifai';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank.js'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import Signin from './components/Signin/Signin.js'
import Register from './components/Register/Register.js'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry.js'
import './App.css';




/* for interactive background */
const particlesOptions = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initState={
  input :'',
  imageUrl:'', /*displayed when we click on submit */
  box:{},/* contain the region value o the face */ 
  route:'siginin', /*keeps track where we are at the page */
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }  
}


class App extends React.Component{
  /* create a STATE for our apps to knows 
  - what the data  that the user entred 
  -remember this data
  -update at any time its get changed 
  */
 constructor()
 {
    super();
    this.state= initState
      
    
  }
  // update user 
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }
/* calculate face location based on the input we get from clarifai API (return percentage)
  func return object -  the 4 point of the square
*/
calculateFaceLocation = (data) => {
  const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;// return the region of the face 
   const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width,height)
    return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }


}


 
/* displayFaceBox */ 
  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  /*triggered every time user enter input*/
  onInputChange = (event) => {
    // console.log(event) 
    // console.log( event.target.value)/* print the entred input */
    this.setState({input: event.target.value});

  }
  onButtonSubmit = () => {
    
    // console.log('click');
     // throw new Error('NOOOOOO') // this.state.input===''  
    if (this.state.input!==''){
      console.log(this.state)
      this.setState({imageUrl: this.state.input});
    
    /*predict get : Clarifai model we whant to use  and  the url of the image (input) */
      fetch('http://localhost:3000/imageUrl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
          
        })
      })
      .then(response=>response.json())
      .then( response=> { 
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              //Object.assign get the target object that we Act on it, with  what
              // in this case increase our user entries 
              this.setState(Object.assign(this.state.user, { entries: count}))
            })
            .catch(console.log)

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err=>console.log(err));
    }
    
    
  }
  /*  set app on home page if we signin*/
  onRouteChange=(route) =>{
    if(route==='signout'){ this.setState(initState)}// remove info after signout clear state afer login out
    else if (route==='home'){this.setState({isSignedIn: true})}
    this.setState({route: route})
  
  }

  render()
  {
    const {isSignedIn,imageUrl,route, box} = this.state;
    return (
      <div className="App">
            <Particles className='particles'
              params={particlesOptions}
        
            />
        
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}></Navigation>
        { route==='home'
        ?<div>
          <Logo></Logo>
          <Rank
            name={this.state.user.name}
            entries={this.state.user.entries}>
          </Rank>
          <ErrorBoundry>
          <ImageLinkForm
            input={this.state.input} 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            >
          </ImageLinkForm> 
          </ErrorBoundry> 
          <FaceRecognition box={box} imageUrl= {imageUrl}></FaceRecognition>
        </div>
        :(
          route==='siginin'
          ? <Signin  loadUser={this.loadUser} onRouteChange={this.onRouteChange}></Signin>
          :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}></Register>

        )
        
        }
       

      </div>
    );
  }
}
export default App;
