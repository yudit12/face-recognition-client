
import React from 'react'; 

class ErrorBoundry extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            hasError: false
        }
    }
    //lifecycle method - kind of try catch  as in java script 
    // if smething gooes wrong  this method will run 
    componentDidCatch(error, info){
            this.setState({hasError: true})
    }
    render()
    {
        if (this.state.hasError)
        {
            return <h1> Oooops something went wrong!!!  </h1>
        }
        return this.props.children
    }
   

}
export default ErrorBoundry;