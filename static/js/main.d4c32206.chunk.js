(this["webpackJsonpsmart-brain"]=this["webpackJsonpsmart-brain"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/brain.f7fd504d.png"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(6),r=a.n(i),o=(a(16),a(1)),l=a(2),c=a(4),m=a(3),u=a(5),h=a(8),p=a.n(h),d=function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("siginin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),s.a.createElement("p",{onClick:function(){return t("registerome")},className:"f3 link dim black underline pa3 pointer"},"Register"))},g=a(9),b=a.n(g),f=a(10),E=a.n(f),w=(a(17),function(){return s.a.createElement("div",{className:"ma4 mt0"},s.a.createElement(b.a,{className:"Tilt br2 shadow-2",options:{max:60},style:{height:150,width:150}},s.a.createElement("div",{className:"Tilt-inner pa3"},s.a.createElement("img",{alt:"logo",src:E.a}))))}),v=(a(18),function(e){var t=e.input,a=e.onInputChange,n=e.onButtonSubmit;return s.a.createElement("div",null,console.log(t),s.a.createElement("p",{className:"f3"},"This Brain will detect the face in the picture . Try it(; "),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"form center pa4 br3 shadow-5"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:a}),s.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n},"Detect"))),s.a.createElement("p",{className:"f3"},s.a.createElement("br",null),"*Please enter image, or URL of image "))}),N=function(e){var t=e.name,a=e.entries;return s.a.createElement("div",null,s.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is...")),s.a.createElement("div",{className:"white f1"},console.log(a),a))},C=(a(19),function(e){var t=e.imageUrl,a=e.box;return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),s.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){console.log(a.state),fetch("https://shielded-badlands-01382.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})),s.a.createElement("label",{className:"pa0 ma0 lh-copy f6 pointer"},s.a.createElement("input",{type:"checkbox"})," Remember me")),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",onClick:this.onSubmitSignIn,type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),t}(s.a.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://shielded-badlands-01382.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(console.log("user",e),a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(s.a.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?s.a.createElement("h1",null," Oooops something went wrong!!!  "):this.props.children}}]),t}(s.a.Component),j=(a(20),{particles:{number:{value:250,density:{enable:!0,value_area:800}}}}),O={input:"",imageUrl:"",box:{},route:"siginin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},I=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),s=Number(a.height);return console.log(n,s),{leftCol:t.left_col*n,topRow:t.top_row*s,rightCol:n-t.right_col*n,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){""!==e.state.input&&(console.log(e.state),e.setState({imageUrl:e.state.input}),fetch("https://shielded-badlands-01382.herokuapp.com/imageUrl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://shielded-badlands-01382.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)})))},e.onRouteChange=function(t){"signout"===t?e.setState(O):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=O,e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,i=e.box;return s.a.createElement("div",{className:"App"},s.a.createElement(p.a,{className:"particles",params:j}),s.a.createElement(d,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement(N,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(S,null,s.a.createElement(v,{input:this.state.input,onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit})),s.a.createElement(C,{box:i,imageUrl:a})):"siginin"===n?s.a.createElement(y,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(k,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(21);r.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.d4c32206.chunk.js.map