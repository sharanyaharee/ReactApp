import { useRouteError } from "react-router-dom"


const Error=()=>{

    let err= useRouteError()
    console.log(err)
    return(
        <div className="error-page">
        <h1 className="error">Oops!! Something went Wrong</h1>
        <h2 className="error">{err.status}:{err.statusText}</h2>
        <h3 className="error">{err.data}</h3>
        </div>
    )
}
export default Error