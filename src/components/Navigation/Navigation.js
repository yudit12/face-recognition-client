import React from 'react';

/*
(NOTE : for  run the func each time onClick opened
 and not run the func only when  render called )
instead writing onRouteChange('siginin')
we add its as => function 
()=>onRouteChange('siginin')

*/
const Navigation =({onRouteChange,isSignedIn}) =>{

    if (isSignedIn)
    {
        return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}} >
            <p onClick={()=>onRouteChange('signout')} className='f3 link dim black underline pa3 pointer' >Sign Out</p>
          
            
        </nav>
        );

    }else{
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}} >
                <p onClick={()=>onRouteChange('siginin')} className='f3 link dim black underline pa3 pointer' >Sign In</p>
                <p onClick={()=>onRouteChange('registerome')} className='f3 link dim black underline pa3 pointer' >Register</p>
            </nav>
        );
            
       

    }
        

}

export default Navigation