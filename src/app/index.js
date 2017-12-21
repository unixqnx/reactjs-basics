import React from 'react';
import { render } from 'react-dom';

import { Header } from ".\\components\\Header";
import { Home } from ".\\components\\Home";

class App extends React.Component{
    render(){
        let user = {
            name:"Anna",
            hobbies:["Sports", "Reading"]
        };


        return(
        <div className="container">
            <div className="row">
                <div className="cal-xs-10 col-xs-offset-1">
                    <Header/>
                </div>
            </div>
            <div className="row">
                <div className="cal-xs-10 col-xs-offset-1">
                    <Home name="Dmitriy" age={33} user={user}>
                        <p>This is a paragraph!</p>
                    </Home>
                    {/* <Home/> */}
                </div>
            </div>
        </div>
    );
    }
}

render(<App/>, window.document.getElementById("app"));






