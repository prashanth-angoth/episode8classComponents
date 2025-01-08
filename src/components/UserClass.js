// to create a class based components we have to extend a class 
// with react.component
// class based Components
import React from "react"
class UserClass extends React.Component{
    // in fuctional components the function itself retuns a peace of JSX code
    // where as in class based components we have render method which will return the
    // piece of JSX code
    constructor(props){
        
        super(props) // we have add this constructor and super keywords while accessing the props inClass based components
        // super key word is used here because we are extending the class with React.component and which also have constructor
        
        // state variable in CBC
        // to create multiple state varibles we can add them in the below state variable.
        // we don't create a whole new variable like we create in functional based comp
        // here this state is big object which holds all the state variables 
        this.state ={
            userData:{
                name: "dummy"
            },
            count:0,
            // count2:1
        }
    }
    async componentDidMount(){
        console.log("conponent did mount get called and here we make api calls in CBC")
         const data =await fetch("https://api.github.com/users/prashanth-angoth");
         const json = await data.json();
         this.setState({
            userData: json
         })
         console.log(json)
    }
    render(){
        return (
            <div>
                <h2>User Details</h2> 
                <h5>count : {this.state.count}</h5>
                ,<button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increse count by 1</button>
                {/* <h5>count2 : {this.state.count2}</h5>  */}
                <h5>{this.state.userData.login}</h5>  
                <h4>{this.props.edu}</h4>  
            </div>
          )
    }
}
export default UserClass