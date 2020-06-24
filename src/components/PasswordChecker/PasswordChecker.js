import React from 'react';
// import './PasswordChecker.css';
// import PasswordList from './PasswordList.js'
const initState={
   inserted_password:'',
   output:''
}
class PasswordChecker extends React.Component  {

  constructor(props){
      super(props);
      this.state=initState
  
    }

  /*triggered every time user enter input*/
  onInputChange = (event) => {
    this.setState({inserted_password: event.target.value});
    // console.log( event.target.value)/* print the entred input */
    // console.log(this.state.input)
  }
  
  onPasswordSubmit = () => {
    // console.log('click');
    //  this.props.onRouteChange('passwordChecker')
    fetch('https://cors-anywhere.herokuapp.com/https://server-image-face-detection.herokuapp.com/password_checker', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        password:this.state.inserted_password
     
      })
    })
    .then(response => response.json())
    // .then(response => response.text())
    .then(result=>{
      // console.log(result)
      this.setState({output:result})

    })
    .catch(err=>console.log(err));
    

  }


  render(){
      return (

          <div>
              {/* <p>PasswordChecker</p>  */}
          <article  className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
            <div className="measure "  >
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0">Password Checker</legend>
                <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Enter password</label>
                            <input
                              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                              // type="password" 
                              name="password"
                              id="password"
                              onChange={this.onInputChange}
                              
                              />
                        </div>
                    
              

                  {/* <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label> */}
              </fieldset>
              <div className="">
                <input 
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib " 
                  type="submit" 
                  value="check"
                  onClick={this.onPasswordSubmit}
                  
                  
                      
                  />
                  
              </div>
              
            </div>
            
          </main>
          </article>

          {/* <PasswordList paswwordinfoarray={this.state.paswwordinfoarray} /> */}
          {  this.state.output!=='' && this.state.output.includes('was found')
                    ? <div style={{marginTop: 20 ,fontSize:30, color:"red"}}> {this.state.output} </div>
                    :(
                      this.state.output!=='' && this.state.output.includes('NOT found')
                      ?  <div style={{marginTop: 20 ,fontSize:30, color:"green"}}> {this.state.output} </div>
                      :""                   
                    )
                    }
          </div>
        
        
      );
  }

  
}

export default PasswordChecker;