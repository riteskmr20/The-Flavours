import React from "react";

class UserClass extends React.Component{

    constructor(props){
      super(props);
    }
    render(){
        return(
          <div className="user-card">
          <h2>Name:Ritesh</h2>
          <h3>Location:Varanasi</h3>
          <h4>Contact:riteshkmr2002@gmail.com</h4>
        </div>
        );
    }
    
}
export default UserClass;