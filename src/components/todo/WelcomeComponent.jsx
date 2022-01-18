import React from "react";
import { Link, useParams} from 'react-router-dom'

// alt fix to the lecture
function WelcomeCompopnent () {
    let {name} = useParams() ;
    // using <a> will make entire page refreshed. However, doing single page app, you don't want to refresh whole page. so use <Link>
    return (
        <>
            <h1>Welcome { name }!</h1> 
            <div className="container">You can manage your todos <Link to="/todos">here</Link>.</div>
        </>)
}

export default WelcomeCompopnent