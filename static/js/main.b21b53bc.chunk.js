(this.webpackJsonpmy_websit_client=this.webpackJsonpmy_websit_client||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(67),i=a.n(s),o=(a(100),a(21)),l=a(22),c=a(27),m=a(23),u=a(28),d=a(88),p=a.n(d),h=function(e){var t=e.onRouteChange;return e.isSignedIn?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signout")},className:"f4 link dim black underline pa3 pointer"},"Sign Out"),r.a.createElement("p",{onClick:function(){return t("imagefacedetection")},className:"f4 link dim black underline pa3 pointer"},"Face Detection")):r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),r.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},b=a(89),f=a.n(b),g=a(90),w=a.n(g),E=(a(101),function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(f.a,{className:"Tilt br2 shadow-2",options:{max:60},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner pa3"},r.a.createElement("img",{alt:"logo",src:w.a}))))}),v=a(58),N=a(18),y=(a(72),function(e){var t=e.onRouteChange,a=e.loadUser;return r.a.createElement(v.a,{initialValues:{isSubmitting:"",email:"",password:""},onSubmit:function(e,n){n.setSubmitting,n.setuser;setTimeout((function(){fetch("/sginin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})}).then((function(e){return e.json()})).then((function(n){n.id?(a(n),e.isSubmitting=!0,t("home")):"error loggin in!!"===n?(console.log("worng email or password"),e.isSubmitting=!1):(console.log("Ooops something went wrong"),e.isSubmitting=!1),console.log(e.isSubmitting)})).catch((function(e){return console.log(e)}))}),500)},validationSchema:N.a().shape({email:N.b().email().required("Required"),password:N.b().required("No password provided.").min(1,"Password is too short - should be 8 chars minimum.").matches(/(?=.*[0-9])/,"Password must contain a number.")})},(function(e){var a=e.values,n=e.touched,s=e.errors,i=e.handleChange,o=e.handleBlur,l=e.handleSubmit;return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure ",onSubmit:l},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:s.email&&n.email&&"error",type:"email",name:"email",id:"email-address",value:a.email,onChange:i,onBlur:o}),s.email&&n.email&&r.a.createElement("div",{className:"input-feedback"},s.email)),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:s.password&&n.password&&"error",type:"password",name:"password",id:"password",value:a.password,onChange:i,onBlur:o}),s.password&&n.password&&r.a.createElement("div",{className:"input-feedback"},s.password))),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ",type:"submit",value:"Sign in",name:"Sign in",id:"signin",onChange:i,onBlur:o}),!1===a.isSubmitting?r.a.createElement("div",{className:"input-feedback"},"wrong email or password!"):""),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return t("register")},href:"#0",className:"f6 link dim black db pointer"},"Register")))))}))}),k=function(e){var t=e.onRouteChange,a=e.loadUser;return r.a.createElement(v.a,{initialValues:{isSubmitting:"",name:"",email:"",password:""},onSubmit:function(e,n){n.setuser,n.setSubmitting;setTimeout((function(){fetch("/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,password:e.password})}).then((function(e){return e.json()})).then((function(n){n.id?(a(n),t("home"),e.isSubmitting=!0):"didnt save user!!"===n?(console.log("Please enter different email or password "),e.isSubmitting=!1):(console.log("something went wrong , Please try again"),e.isSubmitting=!1)})).catch((function(e){return console.log(e)}))}),500)},validationSchema:N.a().shape({name:N.b().required("Required").min(1,"Name too short"),email:N.b().email().required("Required"),password:N.b().required("No password provided.").min(1,"Password is too short - should be 8 chars minimum.").matches(/(?=.*[0-9])/,"Password must contain a number.")})},(function(e){var a=e.values,n=e.touched,s=e.errors,i=e.handleChange,o=e.handleBlur,l=e.handleSubmit;return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure ",onSubmit:l},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register "),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name-address"},"Name"),r.a.createElement("input",{className:s.name&&n.name&&"error",type:"text",name:"name",id:"name",value:a.name,onChange:i,onBlur:o}),s.name&&n.name&&r.a.createElement("div",{className:"input-feedback"},s.name)),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:s.email&&n.email&&"error",type:"email",name:"email",id:"email-address",value:a.email,onChange:i,onBlur:o}),s.email&&n.email&&r.a.createElement("div",{className:"input-feedback"},s.email)),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:s.password&&n.password&&"error",type:"password",name:"password",id:"password",value:a.password,onChange:i,onBlur:o}),s.password&&n.password&&r.a.createElement("div",{className:"input-feedback"},s.password)),r.a.createElement("p",{onClick:function(){return t("passwordChecker")},href:"#0",className:"f6 link dim black db pointer"}," password check?")),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ",type:"submit",value:"Register"}),!1===a.isSubmitting?r.a.createElement("div",{className:"input-feedback"},"Please enter different email or password"):""))))}))},S={inserted_password:"",output:""},C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onInputChange=function(e){a.setState({inserted_password:e.target.value}),console.log(e.target.value)},a.onPasswordSubmit=function(){console.log("click"),fetch("/password_checker",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a.state.inserted_password})}).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({output:e})})).catch((function(e){return console.log(e)}))},a.state=S,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f3 fw6 ph0 mh0"},"Password Checker"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Enter password"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",name:"password",id:"password",onChange:this.onInputChange}))),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ",type:"submit",value:"check",onClick:this.onPasswordSubmit}))))),""!==this.state.output&&this.state.output.includes("was found")?r.a.createElement("div",{style:{marginTop:20,fontSize:30,color:"red"}}," ",this.state.output," "):""!==this.state.output&&this.state.output.includes("NOT found")?r.a.createElement("div",{style:{marginTop:20,fontSize:30,color:"green"}}," ",this.state.output," "):"")}}]),t}(r.a.Component),j=a(63),O=(a(105),function(e){var t=e.input_error,a=e.onInputChange,n=e.onButtonSubmit;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3"},"This Brain will detect the face in the picture . Try it(; "),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form1 center pa4 br3 shadow-5"},r.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:a}),r.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n},"Detect"))),""!==t?r.a.createElement("div",{style:{marginTop:20,fontSize:20,color:"red"}}," *Please enter image link "):"")}),_=(a(106),a(49)),R=a.n(_),T=function(e){var t=e.box,a=e.imageUrl;return R()(a)?r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{id:"inputimage",alt:"",src:a,width:"500px",heigh:"auto"}),t.map((function(e,t){return r.a.createElement("div",{key:t.toString(),className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}})})))):r.a.createElement("div",null)},x=function(e){var t=e.name,a=e.entries;return r.a.createElement("div",null,r.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is...")),r.a.createElement("div",{className:"white f1"},a))},B=a(70),I=a.n(B),P=new I.a.App({apiKey:"344f82caa0f94d048bd5051627471713"}),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onInputChange=function(e){a.setState({input:e.target.value})},a.calculateFaceLocation=function(e){var t=Object(j.a)(e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box}))),a=document.getElementById("inputimage"),n=Number(a.width),r=Number(a.height);return Object(j.a)(t.map((function(e){return{leftCol:e.left_col*n,topRow:e.top_row*r,rightCol:n-e.right_col*n,bottomRow:r-e.bottom_row*r}})))},a.displayAllFaces=function(e){a.setState({faces_array:Object(j.a)(e)})},a.onButtonSubmit=function(){a.setState({imageUrl:a.state.input}),console.log(a.state.input),console.log(R()(a.state.input)),R()(a.state.input)?(a.setState({input_error:""}),P.models.predict(I.a.FACE_DETECT_MODEL,a.state.input).then((function(e){e&&fetch("/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a.state.user.id})}).then((function(e){return e.json()})).then((function(e){a.setState(Object.assign(a.state.user,{entries:e}))})).catch(console.log),a.displayAllFaces(a.calculateFaceLocation(e))})).catch((function(e){return console.log(e)}))):(console.log("empty link or incorrect image link "),a.setState({input_error:" false"}))},a.state={input:"",imageUrl:"",faces_array:[],input_error:"",user:{id:a.props.user.id,name:a.props.user.name,email:a.props.user.email,entries:a.props.user.entries,joined:a.props.user.joined}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.input_error,a=e.faces_array,n=e.imageUrl;return r.a.createElement("div",null,r.a.createElement(x,{name:this.state.user.name,entries:this.state.user.entries}),r.a.createElement(O,{input_error:t,onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),r.a.createElement(T,{box:a,imageUrl:n}))}}]),t}(r.a.Component),F=a(94),q=a.n(F),J=(a(158),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"VideoPlayer"},r.a.createElement("p",{className:"f3"},"This video will track your face try it . Try it(; "),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:" f3 form center pa4 br5 shadow-5"},r.a.createElement("video",{controls:!0,autostart:"true",autoPlay:!0,src:q.a,type:"video/mp4",width:"500px",heigh:"700px"}))))}}]),t}(r.a.Component)),A=(a(159),{particles:{number:{value:70,density:{enable:!0,value_area:400}}}}),D={input:"",route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},z=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joindate}})},e.onRouteChange=function(t){"signout"===t?e.setState(D):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=D,e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.route,a=e.isSignedIn;return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{className:"particles",params:A}),r.a.createElement(h,{onRouteChange:this.onRouteChange,isSignedIn:a}),"home"===t?r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(J,null)):"imagefacedetection"===t?r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(U,{user:this.state.user})):"passwordChecker"===t?r.a.createElement(C,null):"signin"===t?r.a.createElement("div",null,r.a.createElement(y,{onRouteChange:this.onRouteChange,loadUser:this.loadUser})):"signout"===t?r.a.createElement(y,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}):r.a.createElement(k,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(160);i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){},90:function(e,t,a){e.exports=a.p+"static/media/brain.f7fd504d.png"},94:function(e,t,a){e.exports=a.p+"static/media/test2.584cb17b.mp4"},95:function(e,t,a){e.exports=a(161)}},[[95,1,2]]]);
//# sourceMappingURL=main.b21b53bc.chunk.js.map