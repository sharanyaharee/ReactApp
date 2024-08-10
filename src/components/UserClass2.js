import React from "react";

class UserClass2 extends React.Component {
  constructor(props) {
    super(props);
    console.log("child2 construcotr");

    this.state = {
      id: 1234,
      name: this.props.user2.name,
      location: this.props.user2.location,
      designation: this.props.user2.designation,
      city: "India",
    };
  }

  async componentDidMount() {
    console.log("child2 didmount render");
    let res = await fetch("https://api.github.com/users/akshaymarch7");
    let json = await res.json();
    this.setState({
      name: json.name,
      location: json.location,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("COMPONENT DID UPDATE");
  }


  componentWillUnmount(){
    console.log("Component unmounted.. bye bye")
  }
  render() {
    console.log("child2 render");

    let { name, location, designation } = this.state;
    return (
      <div className="user-div">
        <h3>
          {name} --{this.state.id}
        </h3>
        <h3>{location}</h3>
        <h3>{designation}</h3>
        <h3>{this.city}</h3>
        <button
          onClick={() => {
            this.setState({ name: "success!!", designation: "software Dev" });
          }}
        >
          Change name
        </button>
      </div>
    );
  }
}
export default UserClass2;
