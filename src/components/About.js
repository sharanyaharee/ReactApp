import React from "react"
import UserClass from "./UserClass"
import UserClass2 from "./UserClass2"

let user2 ={
    name:"Nived",
    location:"Kannur",
    designation:"Pilot"
}

class About extends React.Component{

    constructor(props){
        super(props)
        console.log("Parent constructor")
    }
componentDidMount(){
    console.log("parent didmount render")

 this.timer =   setInterval(()=>{
 console.log("hello")
    },1000)
}
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("clean up")
    }

    render(){
        console.log("Parent Render")
        return(
            <div className="user-container">
            <h1>About US -Our Team</h1>
            <UserClass name={"Sharanya Kavungal"} location={"Kannur"} designation={"Software Developer"}/>
            <UserClass2 user2={user2}/>
            </div>
        )
    }
}
export default About