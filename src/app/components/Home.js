import React from "react";

export class Home extends React.Component{
    render(){

        let content = "";

        if(true){
            content = <p>Hello!</p>;
        }


        return(
            <div>
                <p>In a new Component!</p>
                {content}
                {2 + 2}
                <hr/>
                {"Hello!"}
                <hr/>
                {2 === 3?"Yes":"No"}
            </div>
        );
    }
}