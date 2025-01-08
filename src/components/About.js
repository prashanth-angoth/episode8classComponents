// if we want to create a component boiler plate code we just type RAFCE and enter,
//  it'll create boilerplate code for you
import User from "./User";
import UserClass from "./UserClass"
// here in this component we are using class based components to understand the class based components;
const About = ()=>{
    return (<div>
        <p>About </p>
    <p>this is namste react course </p>
    {/* <User/> */}
    {/* passing props in class based components */}
    <UserClass name="akhil angoth" edu="MBBS"/> 
    </div>)

}

export default About;