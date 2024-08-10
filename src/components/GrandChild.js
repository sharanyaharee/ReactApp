import React from "react"

class GrandChild extends React.Component{

    constructor(props){
        super(props)
        console.log("Grandchild constructor")
    }
    componentDidMount(){
        console.log("Grandchild didmount")
    }

    render(){

        console.log("Grandchild render")
        return(

            <h2>Iam Grandchild</h2>
        )
    }
}
export default GrandChild