import React from "react";
import GrandChild from "./GrandChild";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child1 constructor");
  }

  componentDidMount(){
    console.log("child1 didmount render")
  }

  render() {
    console.log("child1 render")
    const { name, location, designation } = this.props;
    return (
      <div className="user-div">
        <h3>{name}</h3>
        <h3>{location}</h3>
        <h3>{designation}</h3>
        <GrandChild/>
      </div>
    );
  }
}

export default UserClass;
