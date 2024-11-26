import React from "react";

class UserClass extends React.Component{

   constructor(props){
      super(props)
      console.log(props);
      
      this.state = {
        useInfo: {
          login: "Dummy",
          location: "Default",
        },
      };
      console.log(this.props.name," child  Constructor");
      
   }
   async componentDidMount(){
    console.log(this.props.name,"Child Componet mounted");

    const data = await fetch("https://api.github.com/users/SuhaniKapasiya");
    const json = await data.json();

    console.log("API data ", json);
    
      this.setState({
        useInfo: json,
      });


      this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
 
  
    
   }

   componentDidUpdate(){
    console.log("component Did Update");
    
   }

   componentWillUnmount(){
    console.log("component Will Unmount");
    clearInterval(this.timer);

    
   }
    render(){

 
      //  console.log(this.props.name,"Child  Render");

       const { login, location } = this.state.useInfo;

         return (
           <div className="border  border-black mt-5 p-3">
             <h2>Name : {login}</h2>
             <h3> Location :{location}</h3>
             <h3>Contact : @ruhanikapasiya2018@gmail.com</h3>
           </div>
         );
    }
}

export default UserClass



/*
 - Parent Constructor
 - Parent Render

   -first Constructor
   -Second Constructor

   -first ComponentDisMount
   -Second ComponentDisMount

   <DOM UPDATED - IN SINGLE BATCH>
 - Parent ComponentDisMount

*/



/****
 * -----MOunting-----
 * 
 * Constructor(dummy)
 * Render(dummy)
 * 
 * <HTML Dummy>
 * Components Did Mount
 *    <API Call>
 *     <this.setStae -> state variable is updated
 * 
 * --------UPDATE
 * 
 *  render(API data)
 * <HTML (new API data)>
 * components Update 
 * 
 * 
 * 
 * 
 */





