import User from "./User";
import UserClass from "./UserClass";
const About = () =>{
    return (
    
     <div>
        <h1>About</h1>
        <h2>This is the namaste react about component</h2>
       <User name={"ritesh kumar(function)"}/>
       <UserClass name={"ritesh kumar(classes)"}/>
     </div>
    );
};

export default About;