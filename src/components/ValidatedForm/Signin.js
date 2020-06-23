import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import './ValidatedForm.css'
//Register  ValidatedRegisterForm

const Signin = ({onRouteChange,loadUser}) => (
 
  <Formik
    initialValues={{isSubmitting:"",email: "", password: "" }}
    onSubmit={(values, { setSubmitting,setuser}) => {
      setTimeout(() => {
        // console.log(onRouteChange)
        fetch('/api/sginin', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
          email:values.email,
          password: values.password,
          })
        })
        .then(response => response.json())// response from server 
        // .then(response => response.text())
        .then(data=>{
          // console.log(data)
        //  if (data==="loggin in"){
         if(data.id){      
            // console.log("Logging in", values);
            // setuser=loadUser(data)
            loadUser(data)
            //if all good- move to home page
            values.isSubmitting= true
            setSubmitting=onRouteChange('home')
          }
          else if (data==="error loggin in!!"){
              console.log("worng email or password")
              // values.password=""
              values.isSubmitting= false
              

          }
          else{//
            console.log("Ooops something went wrong")
              values.isSubmitting= false

          }
          console.log( values.isSubmitting)
    
        })
        .catch(err=>console.log(err));
        
      }, 500);

    
      
    }}
    
    validationSchema={Yup.object().shape({
      // isSubmitting: Yup.string()
      // .required("Required"),
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(1, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        // isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (

        <article  className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
        <form className="measure " onSubmit={handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
                //  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                className={"pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100"  && errors.email && touched.email && "error" }
                type="email" 
                name="email"  
                id="email-address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                
                />
                {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
                 )}
                
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
                // className="b pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100"
                className={"b pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" && errors.password && touched.password && "error"  } 
                type="password" 
                name="password"  
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
                )}
            </div>
            {/* <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label> */}
             
          </fieldset>
          <div className="">
            <input 
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib " 
              type="submit" 
              value="Sign in"
              // onSubmit={handleSubmit}
              // disabled={isSubmitting}
                name="Sign in"  
                id="signin"
                // value={values.isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
             
            
              />
              
              {values.isSubmitting===false?
              
                (<div className="input-feedback">wrong email or password!</div>
                ):""}
          
          </div>
          <div className="lh-copy mt3">
            <p onClick={()=>onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Register</p> 
              
          </div>
        </form>
      </main>
      </article>
        
      );
    }}
  </Formik>
);

export default Signin;
