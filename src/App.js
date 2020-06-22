import React  from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Signin from './components/ValidatedForm/Signin.js';
import Register from './components/ValidatedForm/Register.js';
import PasswordChecker from './components/PasswordChecker/PasswordChecker.js';
import ImageFaceDetection from './components/ImageFaceDetection/ImageFaceDetection.js'
// import Camera_display from './components/VideoPlayer/Camera_display.js';


import VideoPlayer from './components/VideoPlayer/VideoPlayer.js';


import './App.css';




// for the background
/*
taken from 
https://www.npmjs.com/package/react-particles-js
*/
const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 400
      }
    }
  }
}

/* 
create a STATE for our apps to knows 
  - what the data  that the user entred 
  -remember this data
  -update at any time its get changed 
  */
const initState={
  input :'',
  route: 'signin',//keep track were we are in the page
  isSignedIn : false,
  user:{
    id: '',
    name:'',
    email:'',
    entries:0,
    joined:''
  }
}
class App extends React.Component  {
  constructor(){
    super();
    this.state=initState

  }

  // componentDidMount=(()=>{
  //   fetch('/display_users')
  //   .then(response=>response.json()
  //   .then(data=>console.log(data)))

  // });


  loadUser= (data)=>{
    this.setState({user:{
      id: data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined:data.joindate

    }})
  }

    /*
    int route- on signin page 
     set app on home page if we signin
     */
   onRouteChange=(route) =>{
    if(route==='signout'){ this.setState(initState)}// remove info after signout clear state afer login out
    else if (route==='home'){this.setState({isSignedIn: true})}
    this.setState({route: route})
 
  }

  render(){
    const {route,isSignedIn} = this.state;

    return (
      <div className="App">
        
       
       
       
        <Particles className='particles'params={particlesOptions}/>
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        {/* <Camera_display/> */}

        {route ==='home'
          ? <div>
              <Logo/>
              <VideoPlayer/>
              
              
          </div>
          :(
            route=== 'imagefacedetection'
            ? <div>
                <Logo/>
                <ImageFaceDetection user= {this.state.user}/>
      
            </div>

         :(
           route==='passwordChecker'
           ? <PasswordChecker/>
            :(
              route=== 'signin'
                ? <div>
                  <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
                  </div>
                :( route=== 'signout'
                ? <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
                : <Register  onRouteChange={this.onRouteChange }loadUser={this.loadUser}/> 
                )  
              )
            )
          )
        
         }
       
      
      </div>
    );
  }

}

export default App;
