import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import './ValidatedForm.css'
//Register  ValidatedRegisterForm
const Register = ({onRouteChange}) => (
  
  <Formik
    initialValues={{name:"", email: "", password: "" }}
    onSubmit={(values, { setSubmitting}) => {
      setTimeout(() => {
        console.log(onRouteChange)
        console.log("Logging in", values);
        //if all good- move to home page
        setSubmitting=onRouteChange('home')
      }, 500);
      
    }}

    validationSchema={Yup.object().shape({
      name: Yup.string()
        .required("Required")
        .min(1, "Name too short"),
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
        // name,
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
            <legend className="f1 fw6 ph0 mh0">Register </legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name-address">Name</label>
              <input 
                //  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                className={"pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" && errors.name && touched.name && "error" }
                type="text" 
                name="name"  
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
        
                />
                 {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
                 )}
            </div>
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
              value="Register"

              // disabled={isSubmitting}
              />
          </div>
          
        </form>
      </main>
      </article>
        
      );
    }}
  </Formik>
);

export default Register;