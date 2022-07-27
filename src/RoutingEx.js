import React from "react"
import {BrowserRouter as Router,Link, Route } from 'react-router-dom'

function Routeexamp(){
    return(
            <>
            <Router>
            <Link to="/home">Home Page </Link>
                    <Link to="/about">About page </Link>
                <Route path={"/home"}><Home/></Route>
                <Route path={"/about"}><About/></Route>
                    
             
                
             
                </Router></>
    )
}



function Home(){
        return(
            <>
            <h2>This is Home page</h2>
            </>
        )
}

function About(){
    return(
        <>
        <h2>This is About  page</h2>
        </>
    )
}



export default Routeexamp