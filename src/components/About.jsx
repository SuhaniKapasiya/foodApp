import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    //  console.log("Parent  Constructor");
  }

  componentDidMount() {
    // console.log("Parent Componet mounted");
  }
  render() {
    // console.log("Parent  Render");
    return (
      <div className="  font-bold ">
        <h1>This is a About us Page 😊😊😊😊</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <User  name = {"suhani"}  /> */}
        <UserClass name="first" location={"Noida"} />
        {/* <UserClass name="Second" location={"Delhi"} />
        <UserClass name="Third" location={"Mumbai"} /> */}
      </div>
    );
  }
}

export default About;
